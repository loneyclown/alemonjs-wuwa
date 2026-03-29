const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../../签到日历-BCblBQv0.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
