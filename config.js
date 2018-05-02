import { name as PWD } from './package.json';

const Defaults = {
  s3URL: `https://deoliyp60f2gq.cloudfront.net/${PWD}/`,
  qaURL: `https://infograficos-estaticos-dev.s3.amazonaws.com/${PWD}/`,
};

const Paths = {
  images: 'app/assets/img/**/*.{jpg,png,gif,svg}',
  styles: 'app/assets/sass/**/*.scss',
  scripts: ['app/assets/js/**/*.js', '!node_modules/**'],
  views: 'app/views/**/*.pug',
};

const DocsGoogle = {
  enable: true,
  apiKey: 'AIzaSyBb3EKF_iqlsVXV49WgfQFTxUjAXzKG0P0',
  // idFile: "1_6M4ssv6ifaKR7Qg0fdUUuVbr5qxIhjqLR34n8hH5iU"
};

export { Defaults, Paths, DocsGoogle };
