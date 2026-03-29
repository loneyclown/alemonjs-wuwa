const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../../日历-BtK7gCau.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
