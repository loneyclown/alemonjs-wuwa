const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../../公告-BMsrX_hB.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
