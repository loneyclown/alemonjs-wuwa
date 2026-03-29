const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../../绑定-wbGFWY49.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
