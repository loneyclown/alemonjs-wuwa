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
                regular: wuwaRouteRules.refresh,
                handler: lazy(() => import('./refresh.js'))
            }
        ]
    }
]);

export { router as default };
