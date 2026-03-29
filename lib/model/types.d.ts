export interface KuroApiResp<T = unknown> {
    code: number;
    msg: string;
    data: T | null;
    success: boolean;
}
export interface EnergyData {
    cur: number;
    total: number;
    refreshTimeStamp: number;
}
export interface DailyData {
    energyData: EnergyData | null;
    livenessData: {
        cur: number;
        total: number;
    } | null;
    battlePassData: unknown[];
    shopDataList: unknown[];
}
export interface AccountBaseInfo {
    name: string;
    id: number;
    level: number;
    worldLevel: number;
    roleNum: number;
    phantomNum: number;
    achievementCount: number;
    boxNum: number;
    soundLevel: number;
    bigWorldLevel: number;
}
export interface RoleData {
    roleId: number;
    roleName: string;
    roleIconUrl: string;
    starLevel: number;
    level: number;
    breach: number;
    attributeId: number;
    attributeName: string;
    weaponTypeId: number;
    chain: number[];
    chainCount: number;
}
export interface RoleListResp {
    roleList: RoleData[];
}
export interface ExploreArea {
    areaId: number;
    areaName: string;
    areaProgress: number;
    itemList: ExploreItem[];
}
export interface ExploreItem {
    type: string;
    name: string;
    progress: number;
    total: number;
}
export interface ExploreResp {
    open: boolean;
    exploreList: ExploreArea[];
    countryList?: ExploreArea[];
}
export interface SignItem {
    id: string;
    goodsName: string;
    goodsNum: number;
    goodsUrl: string;
    sigInStatus: number;
}
export interface SignInitResp {
    sigInNum: number;
    hasSignIn: boolean;
    sigInDTOList: SignItem[];
}
export interface KuroRole {
    roleId: string;
    userId: string;
    gameId: number;
    serverId: string;
    serverName: string;
    roleNum: string;
}
export interface TowerFloor {
    floorName: string;
    star: number;
    maxStar: number;
    roleList: RoleData[];
}
export interface TowerResp {
    isUnlock: boolean;
    difficultyList: {
        difficulty: number;
        difficultyName: string;
        towerAreaList: {
            areaName: string;
            floorList: TowerFloor[];
            maxStar: number;
            star: number;
        }[];
    }[];
}
