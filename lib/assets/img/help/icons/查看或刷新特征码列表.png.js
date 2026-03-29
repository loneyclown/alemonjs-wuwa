const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../../查看或刷新特征码列表-DP7oNQsx.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
