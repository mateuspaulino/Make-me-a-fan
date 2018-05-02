// import configs from './../../../config';

// const { s3URL, qaURL } = configs;


/**
 * Remove os acentos de uma determinada string
 * @param  {String} s string de entrada
 * @return {String} s string de saída
 */

// const removeAcentos = (s) => {
//   const i = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖŐòóôõöőÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜŰùúûüűÑñŠšŸÿýŽž'.split('');
//   const o = 'AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUUuuuuuNnSsYyyZz'.split('');
//   const map = {};
//   i.forEach((el, idx) => { map[el] = o[idx]; });
//   return s.replace(/[^A-Za-z0-9]/g, ch => map[ch] || ch);
// };


/**
 * Retorna uma string com os caracteres em caixa baixa
 * @param  {String} value é a string de entrada
 * @return {String} value é a string de saída
 */

// const toLowerCase = value => value.toLowerCase();


/**
 * Adiciona escape a um conjunto limitado de caracteres de uma string
 * @param  {String} str é a string de entrada
 * @return {String} str é a string de saída
 */

// const escapeRegExp = str => str.replace(/[-[\]{}()*+?.\\^$\\|]/g, '\\$&');


/**
 * Retorna uma lista ordenada, quando nenhum objeto é adicionado,
 * a ordem será utilizada como default
 * @param  {Array} lista com os objetos
 * @param  {String} objeto a ser o parâmetro da ordenação
 * @param  {String} direcao define se a ordenação é crescente ou descrecente
 * @return {Array} lista ordenada, o default será definido pela ordem
 */

// const ordernaDados = (lista, objeto, direcao) => (
//   lista.sort((a, b) => {
//     if (direcao === 'asc') {
//       return a[objeto].localeCompare(b[objeto]);
//     } else if (direcao === 'desc') {
//       return b[objeto].localeCompare(a[objeto]);
//     }
//     return a.ordem - b.ordem;
//   })
// );


/**
 * Retorna o bucket de acordo com o ambiente
 * @param  {Int} deverá ser usado 0 para infogbucket e 1 para infograficos-estaticos
 */

// const defineBucketURL = (index) => {
//   const bucket = {
//     dev: ['infogbucket-dev', 'infograficos-estaticos-dev'],
//     prod: ['https://d37iydjzbdkvr9.cloudfront.net', 'https://deoliyp60f2gq.cloudfront.net'],
//   };

//   const host = window.location.host.split('.')[0];
//   if (host !== 'infograficos') {
//     return `https://${bucket.dev[index]}.s3.amazonaws.com`;
//   }
//   return `${bucket.prod[index]}`;
// };

/**
 * Retorna a URL de acordo com o ambiente
 */

// const defineAmbienteURL = () => {
//   const host = window.location.host.split('.')[0];
//   return host !== 'infograficos' ? qaURL : s3URL;
// };


/**
 *
 */

// const scrollToTop = () => {
//   const target = document.querySelector('body');
//   const { offsetTop } = target;
//   const c = document.documentElement.scrollTop || document.body.scrollTop;
//   if (c > offsetTop) {
//     window.requestAnimationFrame(scrollToTop);
//     window.scrollTo(0, c - (c / 4));
//   }
// };


/**
 *
 */

// const normalizeDate = (e) => {
//   const d = e.split('/');
//   return new Date(`${d[1]}/${d[0]}/${d[2]}`);
//   // return new Date(d[1]+"/"+d[0]+"/"+d[2]);
// };


/**
 *
 */

// const convertToCamel = s => s.replace(/(\s\w)/g, m => m[1].toUpperCase());


// export {
//   removeAcentos,
//   ordernaDados,
//   removeAtributo,
//   toLowerCase,
//   escapeRegExp,
//   defineBucketURL,
//   defineAmbienteURL,
//   scrollToTop,
// };
