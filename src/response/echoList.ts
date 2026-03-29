import CharDetailCard from '@src/img/views/CharDetailCard';
import { apiBaseInfo, apiRoleData, apiRoleDetail, getCookie } from '@src/model/api';
import { getActiveUid } from '@src/model/db';
import { createEvent, EventsEnum, Format, useMessage } from 'alemonjs';
import { renderComponentIsHtmlToBuffer } from 'jsxp';

export default async (e: EventsEnum) => {
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

  const ckResult = await getCookie(uid, userId);

  if (!ckResult) {
    md.addText('[鸣潮] 未添加Token或Token已失效\n请使用 #登录 手机号,验证码 重新登录');
    format.addMarkdown(md);
    void message.send({ format });

    return;
  }

  const { cookie } = ckResult;

  // 获取角色列表，取第一个角色的声骸详情
  const [roleResp, baseResp] = await Promise.all([apiRoleData(uid, cookie), apiBaseInfo(uid, cookie)]);

  if (!roleResp.success || !roleResp.data?.roleList?.length) {
    md.addText('[鸣潮] 角色列表为空或查询失败');
    format.addMarkdown(md);
    void message.send({ format });

    return;
  }

  // 默认取星级最高、等级最高的角色
  const roles = roleResp.data.roleList.slice().sort((a, b) => b.starLevel - a.starLevel || b.level - a.level);
  const targetRole = roles[0];

  // 查询角色详情（含声骸）
  const detailResp = await apiRoleDetail(uid, cookie, targetRole.roleId);

  if (!detailResp.success || !detailResp.data) {
    md.addText(`[鸣潮] 角色详情查询失败: ${detailResp.msg || '未知错误'}`);
    format.addMarkdown(md);
    void message.send({ format });

    return;
  }

  // 补充 base 信息到 role
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
