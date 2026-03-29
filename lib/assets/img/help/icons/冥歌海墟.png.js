const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../../冥歌海墟-BlVf9yl8.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
