const P = '(?:!|！|\\/|#|＃)';
const wuwaRouteRules = {
    help: new RegExp(`^${P}(鸣潮|wuwa|mc)(帮助|help)$`),
    login: new RegExp(`^${P}(登录|登陆|登入|login|dl)(.*)$`),
    bind: new RegExp(`^${P}(绑定|切换|解绑|删除|查看|我的)(特征码|uid)(.*)$`),
    token: new RegExp(`^${P}(添加|删除|获取)(token|Token|TOKEN|ck|CK)(.*)$`),
    stamina: new RegExp(`^${P}(每日|mr|实时便笺|便笺|便签|体力)$`),
    roleinfo: new RegExp(`^${P}(查询|卡片|kp)$`),
    explore: new RegExp(`^${P}(ts|探索|探索度)$`),
    sign: new RegExp(`^${P}(签到日历|签到记录|签到|qdjl|qd)$`),
    tower: new RegExp(`^${P}(深塔|逆境深塔)$`),
    refresh: new RegExp(`^${P}(刷新面板|刷新)$`)
};
const WAVES_GAME_ID = 3;
const SERVER_ID = '76402e5b20be2c39f095a152090afddc';
const SERVER_ID_NET = '919752ae5ea09c1ced910dd668a63ffb';
const NET_SERVER_ID_MAP = {
    5: '591d6af3a3090d8ea00d8f86cf6d7501',
    6: '6eb2a235b30d05efd77bedb5cf60999e',
    7: '86d52186155b148b5c138ceb41be9650',
    8: '919752ae5ea09c1ced910dd668a63ffb',
    9: '10cd7254d57e58ae560b15d51e34b4c'
};
const KURO_BASE_URL = 'https://api.kurobbs.com';
const KURO_API = {
    LOGIN: `${KURO_BASE_URL}/user/sdkLogin`,
    LOGIN_LOG: `${KURO_BASE_URL}/user/login/log`,
    ROLE_LIST: `${KURO_BASE_URL}/gamer/role/list`,
    REFRESH: `${KURO_BASE_URL}/aki/roleBox/akiBox/refreshData`,
    REQUEST_TOKEN: `${KURO_BASE_URL}/aki/roleBox/requestToken`,
    GAME_DATA: `${KURO_BASE_URL}/gamer/widget/game3/getData`,
    BASE_DATA: `${KURO_BASE_URL}/aki/roleBox/akiBox/baseData`,
    ROLE_DATA: `${KURO_BASE_URL}/aki/roleBox/akiBox/roleData`,
    ROLE_DETAIL: `${KURO_BASE_URL}/aki/roleBox/akiBox/getRoleDetail`,
    CALABASH_DATA: `${KURO_BASE_URL}/aki/roleBox/akiBox/calabashData`,
    EXPLORE_DATA: `${KURO_BASE_URL}/aki/roleBox/akiBox/exploreIndex`,
    SIGN_INIT: `${KURO_BASE_URL}/encourage/signIn/initSignInV2`,
    SIGN_IN: `${KURO_BASE_URL}/encourage/signIn/v2`,
    TOWER_INDEX: `${KURO_BASE_URL}/aki/roleBox/akiBox/towerIndex`,
    TOWER_DETAIL: `${KURO_BASE_URL}/aki/roleBox/akiBox/towerDataDetail`,
    CHALLENGE_DATA: `${KURO_BASE_URL}/aki/roleBox/akiBox/challengeDetails`,
    MINE_V2: `${KURO_BASE_URL}/user/mineV2`
};
const KURO_VERSION = '3.0.0';
const IOS_USER_AGENT = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) KuroGameBox/3.0.0';
const ANDROID_USER_AGENT = 'Mozilla/5.0 (Linux; Android 16; 25098PN5AC Build/BP2A.250605.031.A3; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/143.0.7499.34 Mobile Safari/537.36 Kuro/3.0.0 KuroGameBox/3.0.0';
const WAVES_ECHO_COLORS = {
    凝夜白霜: '#3598db',
    熔山裂谷: '#ba372a',
    彻空冥雷: '#b96ad9',
    啸谷长风: '#169179',
    浮星祛暗: '#e6bf2e',
    沉日劫明: '#d97a24',
    隐世回光: '#48c4d8',
    轻云出月: '#aab8c2',
    不绝余音: '#e64980'
};

export { ANDROID_USER_AGENT, IOS_USER_AGENT, KURO_API, KURO_BASE_URL, KURO_VERSION, NET_SERVER_ID_MAP, SERVER_ID, SERVER_ID_NET, WAVES_ECHO_COLORS, WAVES_GAME_ID, wuwaRouteRules };
