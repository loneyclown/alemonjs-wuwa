const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../../获取绑定的token-BaQsRhFM.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
