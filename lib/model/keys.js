const prefix = 'data:alemonjs-wuwa';
const wuwaKeys = {
    base: (data) => `${prefix}${data ?? ''}`,
    userByUid: (uid) => `${prefix}:user:uid:${uid}`,
    uidByUser: (userId) => `${prefix}:uid:user:${userId}`,
    activeUid: (userId) => `${prefix}:active_uid:user:${userId}`,
    queryCache: (uid, api) => `${prefix}:cache:${uid}:${api}`,
    qrLoginLock: (userId) => `${prefix}:qrlogin:lock:${userId}`
};

export { wuwaKeys };
