const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../../签到-CsfW-8M_.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
