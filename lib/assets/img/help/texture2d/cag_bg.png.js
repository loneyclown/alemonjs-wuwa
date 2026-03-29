const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../../cag_bg-B7JsEBsa.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
