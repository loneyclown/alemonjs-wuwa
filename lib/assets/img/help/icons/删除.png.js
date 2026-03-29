const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../../删除-Do2wi_0X.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
