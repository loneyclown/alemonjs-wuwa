const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../../体力-zrAxnM1M.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
