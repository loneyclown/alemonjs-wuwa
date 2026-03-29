const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../../练度-DWFHuOZg.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
