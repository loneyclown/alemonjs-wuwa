import type { AccountBaseInfo, AnnDetailResp, AnnListResp, CalabashResp, DailyData, ExploreResp, GachaLogItem, KuroApiResp, KuroRole, MineV2Resp, PeriodDetailResp, PeriodListResp, RoleDetailResp, RoleListResp, SignInitResp, TowerResp } from './types';
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
export declare function apiChallengeDetail(uid: string, token: string): Promise<KuroApiResp<TowerResp>>;
export declare function apiSlashDetail(uid: string, token: string): Promise<KuroApiResp<TowerResp>>;
export declare function apiMatrixDetail(uid: string, token: string): Promise<KuroApiResp<TowerResp>>;
export declare function apiRoleDetail(uid: string, token: string, roleId: number): Promise<KuroApiResp<RoleDetailResp>>;
export declare function apiCalabashData(uid: string, token: string): Promise<KuroApiResp<CalabashResp>>;
export declare function apiMineV2(token: string): Promise<KuroApiResp<MineV2Resp>>;
export declare function apiAnnList(eventType?: string, pageSize?: number): Promise<KuroApiResp<AnnListResp>>;
export declare function apiAnnDetail(postId: string): Promise<KuroApiResp<AnnDetailResp>>;
export declare function apiGachaLog(uid: string, cardPoolType: string, recordId?: string): Promise<{
    success: boolean;
    data: GachaLogItem[];
    msg: string;
}>;
export declare function apiPeriodList(uid: string, token: string): Promise<{
    success: boolean;
    code: number;
    msg: string;
    data: PeriodListResp | null;
}>;
export declare function apiPeriodDetail(uid: string, token: string, type: 'month' | 'week' | 'version', period: number): Promise<KuroApiResp<PeriodDetailResp>>;
export declare function getSelfCookie(uid: string, _userId: string): Promise<string | null>;
export declare function getCookie(uid: string, userId: string): Promise<{
    isSelf: boolean;
    cookie: string;
} | null>;
