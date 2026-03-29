const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../../查询角色面板-P7cyQ-WQ.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
