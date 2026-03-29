import React from 'react';
import HTML from './HTML.js';
import fileUrl$1 from '../../assets/img/help/texture2d/banner_bg.jpg.js';
import fileUrl from '../../assets/img/help/texture2d/bg.jpg.js';
import fileUrl$j from '../../assets/img/help/texture2d/cag_bg.png.js';
import fileUrl$k from '../../assets/img/help/texture2d/item.png.js';
import fileUrl$a from '../../assets/img/help/icons/体力.png.js';
import fileUrl$3 from '../../assets/img/help/icons/切换.png.js';
import fileUrl$4 from '../../assets/img/help/icons/删除.png.js';
import fileUrl$8 from '../../assets/img/help/icons/删除token.png.js';
import fileUrl$b from '../../assets/img/help/icons/基本信息卡片.png.js';
import fileUrl$5 from '../../assets/img/help/icons/查看或刷新特征码列表.png.js';
import fileUrl$d from '../../assets/img/help/icons/查询探索度.png.js';
import fileUrl$c from '../../assets/img/help/icons/查询角色面板.png.js';
import fileUrl$f from '../../assets/img/help/icons/深塔.png.js';
import fileUrl$7 from '../../assets/img/help/icons/添加token.png.js';
import fileUrl$6 from '../../assets/img/help/icons/登录.png.js';
import fileUrl$g from '../../assets/img/help/icons/签到.png.js';
import fileUrl$h from '../../assets/img/help/icons/签到日历.png.js';
import fileUrl$2 from '../../assets/img/help/icons/绑定.png.js';
import fileUrl$9 from '../../assets/img/help/icons/获取绑定的token.png.js';
import fileUrl$i from '../../assets/img/help/icons/通用.png.js';
import fileUrl$e from '../../assets/img/help/icons/面板更新.png.js';

const HELP_DATA = [
    {
        title: '绑定账号',
        desc: '在执行查询之前请绑定账号',
        items: [
            { icon: fileUrl$2, name: '绑定特征码', desc: '绑定特征码', eg: '绑定123456' },
            { icon: fileUrl$3, name: '切换特征码', desc: '切换绑定的账户', eg: '切换123456', needCk: true },
            { icon: fileUrl$4, name: '删除特征码', desc: '删除特征码', eg: '删除123456' },
            { icon: fileUrl$5, name: '查看特征码列表', desc: '查看或刷新特征码列表', eg: '查看 or 刷新绑定' }
        ]
    },
    {
        title: '库街区登录',
        desc: '在执行查询之前请库街区登录',
        items: [
            { icon: fileUrl$6, name: '登录页登录', desc: '推荐登录方式', eg: '登录' },
            { icon: fileUrl$7, name: '添加token', desc: '绑定库街区token', eg: '添加token tk,did' },
            { icon: fileUrl$8, name: '删除token', desc: '删除当前库街区CK', eg: '删除token 123456' },
            { icon: fileUrl$9, name: '获取绑定的token', desc: '获取绑定的token', eg: '获取token', needCk: true }
        ]
    },
    {
        title: '信息查询',
        desc: '在执行查询之前请绑定账号',
        items: [
            { icon: fileUrl$a, name: '体力', desc: '获取每日体力状态', eg: 'mr/每日', needCk: true },
            { icon: fileUrl$b, name: '基本信息卡片', desc: '查询基本信息', eg: '卡片', needCk: true },
            { icon: fileUrl$c, name: '查询角色面板', desc: '查询角色面板', eg: '查询', needCk: true },
            { icon: fileUrl$d, name: '查询探索度', desc: '查询探索度', eg: '探索度', needCk: true },
            { icon: fileUrl$e, name: '刷新面板', desc: '刷新面板数据', eg: '刷新面板', needCk: true }
        ]
    },
    {
        title: '深塔查询',
        desc: '深塔数据查询',
        items: [{ icon: fileUrl$f, name: '深塔', desc: '查询逆境深塔', eg: 'st/深塔', needCk: true }]
    },
    {
        title: '社区功能',
        desc: '签到与活动',
        items: [
            { icon: fileUrl$g, name: '签到', desc: '执行库街区每日签到', eg: '签到', needCk: true },
            { icon: fileUrl$h, name: '签到日历', desc: '查看签到日历和奖励', eg: '签到日历', needCk: true },
            { icon: fileUrl$i, name: '帮助', desc: '查看帮助列表', eg: '帮助' }
        ]
    }
];
const COLUMNS = 4;
const ITEM_W = 180;
const ITEM_H = 80;
const ITEM_GAP = 8;
const CONTENT_PAD = 20;
const TOTAL_W = COLUMNS * ITEM_W + (COLUMNS - 1) * ITEM_GAP + CONTENT_PAD * 2;
function WuwaHelp(_props) {
    return (React.createElement(HTML, null,
        React.createElement("div", { style: {
                width: `${TOTAL_W}px`,
                fontFamily: '"tttgbnumber", system-ui, sans-serif',
                fontSize: '14px',
                color: '#ffffff',
                backgroundImage: `url(${fileUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
            } },
            React.createElement("div", { style: {
                    width: '100%',
                    height: '220px',
                    backgroundImage: `url(${fileUrl$1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 30%',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '20px 24px'
                } },
                React.createElement("div", { style: {
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: '120px',
                        background: 'linear-gradient(transparent, rgba(13,27,36,0.95))',
                        pointerEvents: 'none'
                    } }),
                React.createElement("div", { style: { position: 'relative', zIndex: 1 } },
                    React.createElement("div", { style: {
                            fontSize: '28px',
                            fontWeight: 'bold',
                            textShadow: '0 2px 8px rgba(0,0,0,0.7)',
                            letterSpacing: '2px'
                        } }, "\u9E23\u6F6E\u52A9\u624B"),
                    React.createElement("div", { style: {
                            fontSize: '14px',
                            opacity: 0.8,
                            marginTop: '4px',
                            textShadow: '0 1px 4px rgba(0,0,0,0.7)'
                        } }, "\u6F02\u6CCA\u8005\uFF0C\u6B22\u8FCE\u5728\u8FD9\u4E2A\u65F6\u4EE3\u9192\u6765\u3002"))),
            React.createElement("div", { style: { padding: `16px ${CONTENT_PAD}px 20px` } },
                HELP_DATA.map((cat, ci) => (React.createElement("div", { key: ci, style: { marginBottom: '16px' } },
                    React.createElement("div", { style: {
                            height: '36px',
                            backgroundImage: `url(${fileUrl$j})`,
                            backgroundSize: '100% 100%',
                            display: 'flex',
                            alignItems: 'center',
                            paddingLeft: '28px',
                            marginBottom: '8px',
                            position: 'relative'
                        } },
                        React.createElement("div", { style: {
                                position: 'absolute',
                                left: '8px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: '12px',
                                height: '12px',
                                background: '#d32f2f',
                                borderRadius: '2px'
                            } }),
                        React.createElement("span", { style: {
                                fontSize: '15px',
                                fontWeight: 'bold',
                                color: '#ffffff'
                            } }, cat.title),
                        React.createElement("span", { style: {
                                fontSize: '12px',
                                color: 'rgba(255,255,255,0.5)',
                                marginLeft: '10px'
                            } }, cat.desc)),
                    React.createElement("div", { style: {
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: `${ITEM_GAP}px`
                        } }, cat.items.map((item, idx) => (React.createElement("div", { key: idx, style: {
                            width: `${ITEM_W}px`,
                            height: `${ITEM_H}px`,
                            backgroundImage: `url(${fileUrl$k})`,
                            backgroundSize: '100% 100%',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '8px 10px',
                            boxSizing: 'border-box',
                            position: 'relative'
                        } },
                        React.createElement("img", { src: item.icon, style: {
                                width: '48px',
                                height: '48px',
                                objectFit: 'contain',
                                flexShrink: 0,
                                marginRight: '8px'
                            } }),
                        React.createElement("div", { style: {
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                overflow: 'hidden',
                                flex: 1
                            } },
                            React.createElement("div", { style: {
                                    fontSize: '13px',
                                    fontWeight: 'bold',
                                    color: '#ffffff',
                                    lineHeight: '1.3',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                } }, item.name),
                            React.createElement("div", { style: {
                                    fontSize: '11px',
                                    color: 'rgba(255,255,255,0.55)',
                                    lineHeight: '1.3',
                                    marginTop: '2px',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                } }, item.eg)),
                        item.needCk && (React.createElement("div", { style: {
                                position: 'absolute',
                                top: '4px',
                                right: '6px',
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                background: '#4fc3f7'
                            } }))))))))),
                React.createElement("div", { style: {
                        marginTop: '8px',
                        padding: '10px 16px',
                        background: 'rgba(0,0,0,0.35)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    } },
                    React.createElement("span", { style: { fontSize: '12px', color: 'rgba(255,255,255,0.5)' } }, "\u84DD\u8272\u5706\u70B9 = \u9700\u8981\u767B\u5F55 \u00B7 \u6307\u4EE4\u524D\u7F00 # ! / \uFF01\uFF03"),
                    React.createElement("span", { style: { fontSize: '12px', color: 'rgba(255,255,255,0.35)' } }, "Powered by alemonjs"))))));
}

export { WuwaHelp as default };
