import gulp from 'gulp';
import browserSync from 'browser-sync';
import pug from 'gulp-pug';
import del from 'del';
import runSequence from 'run-sequence';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserify from 'browserify';
import babelify from 'babelify';
import fs from 'fs';
import archieml from 'archieml';


// http://blog.revathskumar.com/2016/02/browserify-with-gulp.html
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

// Google apis
import { drive } from 'googleapis';

// Arquivo de config 
import { Defaults, Paths, DocsGoogle } from './config';

// Loading Plugins
const $ = gulpLoadPlugins();

// Recebendo a variável de ambiente
const ENV = process.env.NODE_ENV || 'DEV';

// DEFAULT's 
const { s3URL, qaURL } = Defaults;

// PATH's dos estáticos
const { images, styles, scripts, views } = Paths;

function initGoogleApi(resolve, reject) {
  drive('v3').files.export({
    auth: DocsGoogle['apiKey'],
    fileId: DocsGoogle['idFile'],
    mimeType: 'text/plain'
  }, 
  function(err, response) {
    resolve(response);
    reject(err);
  });
}

let DATA = "";

// Retorna os dados da planilha 
gulp.task('googledocssapi', () => {
  if (DocsGoogle['enable']) {
    return new Promise(initGoogleApi).then(function(file) {
      DATA = archieml.load(file);
      fs.writeFile('./dados.json', JSON.stringify(archieml.load(file)));
    });
  }
}); 


// Scripts 
gulp.task('browserify', () => {
  const bundler = browserify({ entries: './app/assets/js/main.js', debug: true }); 
  return bundler
    .transform(babelify) 
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.uglify())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./public/dev/js'))
    .pipe(browserSync.stream());
});

// Images
gulp.task('images', () => {
  gulp.src(images)
    .pipe($.cache($.imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('./public/dev/img'))
    .pipe(browserSync.stream());
});

// Sass
gulp.task('sass', () => {
  return gulp.src(styles)
    .pipe($.plumber())
  // Verifica o ambiente e add um valor a variavel $s3URL
    .pipe($.sassVariables({ $s3URL : ( ENV === 'PROD' ? s3URL : ENV === 'QLT' ? qaURL : '' ) }))
    .pipe($.sass())
    .pipe($.sourcemaps.init())
    .pipe($.cssnano({ autoprefixer: { browsers: 'last 5 versions', add: true } }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./public/dev/css/'))
    .pipe(browserSync.stream());
});

// Views 
gulp.task('views', () => {
  return gulp.src('./app/views/index.pug')
  .pipe($.plumber())
  .pipe(pug({ 
    pretty: true, 
    data: { 
      url: '', 
      prod: false, 
      dadosDocs: DATA
    } 
  }))
  .pipe(gulp.dest('./public/dev/'))
  .pipe(browserSync.stream());
});

// Views Build
gulp.task('views:build', () => {
  return gulp.src('./app/views/index.build.pug')
  .pipe(pug({ 
    pretty: true, 
    data: { 
      url: ENV === 'PROD' ? s3URL : qaURL, 
      prod: true, 
      dadosDocs: DATA
    } 
  }))
  .pipe($.concat('index.html'))
  .pipe(gulp.dest('./public/build'));
});

// Watch 
gulp.task('watch', () => {
  gulp.watch(scripts, ['browserify']);
  gulp.watch(images,  ['images']);
  gulp.watch(styles,  ['sass']);
  gulp.watch(views,   ['views']);
}).on('change', browserSync.reload);

// Live browser
gulp.task('browserLive', () => {
  browserSync.init({
    port: 8000,
    server: {
      baseDir: [
        './public/dev'
      ]
    }
  });
});

// Copy 
gulp.task('copy',() => {
  gulp.src([
    './public/dev/**',
    '!./public/dev/*.html',
    '!./public/dev/**/*.map',
    '!./public/dev/fonts/**',
    '!./public/dev/fonts'
  ], {
    dot: true
  }).pipe(gulp.dest('./public/build'))
});

// Clean BUILD
gulp.task('clean', () => del(['./public/build/**'], { dot: true }) );

// // Task's 
// gulp.task('default', ['googledocssapi'], () => runSequence(['browserify', 'sass','images','watch','views','browserLive']));

// /* O Sass só esta aqui para forçar a troca da variable de $s3URL, que será "append" dinamicamente. */
// gulp.task('build', ['clean', 'sass' ,'googledocssapi'], () => runSequence(['views:build','copy']));

// Task's 
gulp.task('default', () => runSequence(['browserify', 'sass','images','watch','views','browserLive']));

/* O Sass só esta aqui para forçar a troca da variable de $s3URL, que será "append" dinamicamente. */
gulp.task('build', ['clean', 'sass'], () => runSequence(['views:build','copy']));
