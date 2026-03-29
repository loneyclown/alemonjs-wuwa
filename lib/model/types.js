const GACHA_POOL_TYPE = {
    1: '角色精准调谐',
    2: '武器精准调谐',
    3: '角色调谐',
    4: '武器调谐',
    5: '新手调谐',
    6: '新手自选唤取',
    7: '感恩定向唤取',
    8: '角色新旅唤取',
    9: '武器新旅唤取'
};
const NORMAL_ROLE_LIST = ['维里奈', '卡卡罗', '凌阳', '鉴心', '安可', '漂泊者·衍射', '漂泊者·湮灭'];
const LUCK_TAGS = ['非到极致', '运气不好', '平稳保底', '小欧一把', '欧狗在此'];
const LUCK_THRESHOLDS = {
    角色精准调谐: [74, 87, 99, 105, 120],
    武器精准调谐: [45, 52, 59, 65, 70],
    新手调谐: [10, 20, 30, 40, 45],
    default: [60, 75, 90, 100, 110]
};

export { GACHA_POOL_TYPE, LUCK_TAGS, LUCK_THRESHOLDS, NORMAL_ROLE_LIST };
