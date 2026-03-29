const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../../卡池-DVno1JGR.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
