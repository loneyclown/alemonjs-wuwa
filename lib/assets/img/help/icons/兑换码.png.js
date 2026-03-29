const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../../兑换码-CAXi8dpY.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
