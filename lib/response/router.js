import { wuwaRouteRules } from '../constants/wuwa.js';
import { defineRouter, lazy } from 'alemonjs';

var router = defineRouter([
    {
        selects: ['private.message.create', 'message.create', 'interaction.create', 'private.interaction.create'],
        handler: lazy(() => import('./mw.js')),
        children: [
            {
                regular: wuwaRouteRules.help,
                handler: lazy(() => import('./help.js'))
            },
            {
                regular: wuwaRouteRules.login,
                handler: lazy(() => import('./login.js'))
            },
            {
                regular: wuwaRouteRules.bind,
                handler: lazy(() => import('./user.js'))
            },
            {
                regular: wuwaRouteRules.token,
                handler: lazy(() => import('./token.js'))
            },
            {
                regular: wuwaRouteRules.stamina,
                handler: lazy(() => import('./stamina.js'))
            },
            {
                regular: wuwaRouteRules.roleinfo,
                handler: lazy(() => import('./roleinfo.js'))
            },
            {
                regular: wuwaRouteRules.explore,
                handler: lazy(() => import('./explore.js'))
            },
            {
                regular: wuwaRouteRules.sign,
                handler: lazy(() => import('./sign.js'))
            },
            {
                regular: wuwaRouteRules.tower,
                handler: lazy(() => import('./tower.js'))
            },
            {
                regular: wuwaRouteRules.challenge,
                handler: lazy(() => import('./challenge.js'))
            },
            {
                regular: wuwaRouteRules.slash,
                handler: lazy(() => import('./slash.js'))
            },
            {
                regular: wuwaRouteRules.matrix,
                handler: lazy(() => import('./matrix.js'))
            },
            {
                regular: wuwaRouteRules.charlist,
                handler: lazy(() => import('./charlist.js'))
            },
            {
                regular: wuwaRouteRules.coin,
                handler: lazy(() => import('./coin.js'))
            },
            {
                regular: wuwaRouteRules.announce,
                handler: lazy(() => import('./announce.js'))
            },
            {
                regular: wuwaRouteRules.code,
                handler: lazy(() => import('./code.js'))
            },
            {
                regular: wuwaRouteRules.gacha,
                handler: lazy(() => import('./gacha.js'))
            },
            {
                regular: wuwaRouteRules.echoList,
                handler: lazy(() => import('./echoList.js'))
            },
            {
                regular: wuwaRouteRules.calabash,
                handler: lazy(() => import('./calabash.js'))
            },
            {
                regular: wuwaRouteRules.period,
                handler: lazy(() => import('./period.js'))
            },
            {
                regular: wuwaRouteRules.calendar,
                handler: lazy(() => import('./calendar.js'))
            },
            {
                regular: wuwaRouteRules.pool,
                handler: lazy(() => import('./pool.js'))
            },
            {
                regular: wuwaRouteRules.refresh,
                handler: lazy(() => import('./refresh.js'))
            },
            {
                regular: wuwaRouteRules.develop,
                handler: lazy(() => import('./develop.js'))
            },
            {
                regular: wuwaRouteRules.poker,
                handler: lazy(() => import('./poker.js'))
            },
            {
                regular: wuwaRouteRules.rank,
                handler: lazy(() => import('./rank.js'))
            },
            {
                regular: wuwaRouteRules.wiki,
                handler: lazy(() => import('./wiki.js'))
            }
        ]
    }
]);

export { router as default };
