import { wuwaRouteRules } from '@src/constants/wuwa';
import { defineRouter, lazy } from 'alemonjs';

export default defineRouter([
  {
    selects: ['private.message.create', 'message.create', 'interaction.create', 'private.interaction.create'],
    handler: lazy(() => import('@src/response/mw')),
    children: [
      {
        regular: wuwaRouteRules.help,
        handler: lazy(() => import('@src/response/help'))
      },
      {
        regular: wuwaRouteRules.login,
        handler: lazy(() => import('@src/response/login'))
      },
      {
        regular: wuwaRouteRules.bind,
        handler: lazy(() => import('@src/response/user'))
      },
      {
        regular: wuwaRouteRules.token,
        handler: lazy(() => import('@src/response/token'))
      },
      {
        regular: wuwaRouteRules.stamina,
        handler: lazy(() => import('@src/response/stamina'))
      },
      {
        regular: wuwaRouteRules.roleinfo,
        handler: lazy(() => import('@src/response/roleinfo'))
      },
      {
        regular: wuwaRouteRules.explore,
        handler: lazy(() => import('@src/response/explore'))
      },
      {
        regular: wuwaRouteRules.sign,
        handler: lazy(() => import('@src/response/sign'))
      },
      {
        regular: wuwaRouteRules.tower,
        handler: lazy(() => import('@src/response/tower'))
      },
      {
        regular: wuwaRouteRules.challenge,
        handler: lazy(() => import('@src/response/challenge'))
      },
      {
        regular: wuwaRouteRules.slash,
        handler: lazy(() => import('@src/response/slash'))
      },
      {
        regular: wuwaRouteRules.matrix,
        handler: lazy(() => import('@src/response/matrix'))
      },
      {
        regular: wuwaRouteRules.charlist,
        handler: lazy(() => import('@src/response/charlist'))
      },
      {
        regular: wuwaRouteRules.coin,
        handler: lazy(() => import('@src/response/coin'))
      },
      {
        regular: wuwaRouteRules.announce,
        handler: lazy(() => import('@src/response/announce'))
      },
      {
        regular: wuwaRouteRules.code,
        handler: lazy(() => import('@src/response/code'))
      },
      {
        regular: wuwaRouteRules.gacha,
        handler: lazy(() => import('@src/response/gacha'))
      },
      {
        regular: wuwaRouteRules.echoList,
        handler: lazy(() => import('@src/response/echoList'))
      },
      {
        regular: wuwaRouteRules.calabash,
        handler: lazy(() => import('@src/response/calabash'))
      },
      {
        regular: wuwaRouteRules.period,
        handler: lazy(() => import('@src/response/period'))
      },
      {
        regular: wuwaRouteRules.calendar,
        handler: lazy(() => import('@src/response/calendar'))
      },
      {
        regular: wuwaRouteRules.pool,
        handler: lazy(() => import('@src/response/pool'))
      },
      {
        regular: wuwaRouteRules.refresh,
        handler: lazy(() => import('@src/response/refresh'))
      }
    ]
  }
]);
