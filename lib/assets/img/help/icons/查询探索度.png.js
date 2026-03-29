const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../../查询探索度-BFpVdZz_.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
