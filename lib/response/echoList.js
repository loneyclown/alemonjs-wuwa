import CharDetailCard from '../img/views/CharDetailCard.js';
import { getCookie, apiRoleData, apiBaseInfo, apiRoleDetail } from '../model/api.js';
import { getActiveUid } from '../model/db.js';
import { createEvent, useMessage, Format } from 'alemonjs';
import { renderComponentIsHtmlToBuffer } from 'jsxp';

var echoList = async (e) => {
    const event = createEvent({
        event: e,
        selects: ['message.create', 'private.message.create']
    });
    const [message] = useMessage(event);
    const userId = event.UserId;
    const format = Format.create();
    const md = Format.createMarkdown();
    const uid = await getActiveUid(userId);
    if (!uid) {
        md.addText('[鸣潮] 请先绑定特征码: #绑定特征码123456789');
        format.addMarkdown(md);
        void message.send({ format });
        return;
    }
    const ckResult = await getCookie(uid);
    if (!ckResult) {
        md.addText('[鸣潮] 未添加Token或Token已失效\n请使用 #登录 手机号,验证码 重新登录');
        format.addMarkdown(md);
        void message.send({ format });
        return;
    }
    const { cookie } = ckResult;
    const [roleResp, baseResp] = await Promise.all([apiRoleData(uid, cookie), apiBaseInfo(uid, cookie)]);
    if (!roleResp.success || !roleResp.data?.roleList?.length) {
        md.addText('[鸣潮] 角色列表为空或查询失败');
        format.addMarkdown(md);
        void message.send({ format });
        return;
    }
    const roles = roleResp.data.roleList.slice().sort((a, b) => b.starLevel - a.starLevel || b.level - a.level);
    const targetRole = roles[0];
    const detailResp = await apiRoleDetail(uid, cookie, targetRole.roleId);
    if (!detailResp.success || !detailResp.data) {
        md.addText(`[鸣潮] 角色详情查询失败: ${detailResp.msg || '未知错误'}`);
        format.addMarkdown(md);
        void message.send({ format });
        return;
    }
    if (baseResp.success && baseResp.data) {
        detailResp.data.role = { ...detailResp.data.role, ...{ attributeName: detailResp.data.role.attributeName || '' } };
    }
    const img = await renderComponentIsHtmlToBuffer(CharDetailCard, {
        data: { uid, detail: detailResp.data }
    });
    if (typeof img === 'boolean') {
        md.addText('[鸣潮] 声骸面板渲染失败');
        format.addMarkdown(md);
        void message.send({ format });
        return;
    }
    format.addImage(img);
    void message.send({ format });
};

export { echoList as default };
