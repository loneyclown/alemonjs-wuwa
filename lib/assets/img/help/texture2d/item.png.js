const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../../item-Bol47lTq.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
