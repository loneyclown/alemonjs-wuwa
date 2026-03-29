const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../../基本信息卡片-CIHhGkNq.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
