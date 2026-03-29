import type { AccountBaseInfo, DailyData, ExploreResp, KuroApiResp, KuroRole, RoleListResp, SignInitResp, TowerResp } from './types';
export declare function apiLogin(mobile: string, code: string, did: string): Promise<KuroApiResp<{
    token: string;
}>>;
export declare function apiLoginLog(uid: string, token: string): Promise<KuroApiResp<unknown>>;
export declare function apiRoleList(token: string, did: string, gameId?: number): Promise<KuroApiResp<KuroRole[]>>;
export declare function apiRefresh(uid: string, token: string): Promise<KuroApiResp<unknown>>;
export declare function apiRequestToken(uid: string, token: string, did: string): Promise<KuroApiResp<{
    accessToken: string;
}>>;
export declare function apiDailyInfo(uid: string, token: string): Promise<KuroApiResp<DailyData>>;
export declare function apiBaseInfo(uid: string, token: string): Promise<KuroApiResp<AccountBaseInfo>>;
export declare function apiRoleData(uid: string, token: string): Promise<KuroApiResp<RoleListResp>>;
export declare function apiExploreData(uid: string, token: string): Promise<KuroApiResp<ExploreResp>>;
export declare function apiSignInit(uid: string, token: string): Promise<KuroApiResp<SignInitResp>>;
export declare function apiSignIn(uid: string, token: string): Promise<KuroApiResp<unknown>>;
export declare function apiTowerDetail(uid: string, token: string): Promise<KuroApiResp<TowerResp>>;
export declare function getSelfCookie(uid: string, _userId: string): Promise<string | null>;
export declare function getCookie(uid: string, userId: string): Promise<{
    isSelf: boolean;
    cookie: string;
} | null>;
