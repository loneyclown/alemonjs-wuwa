import { apiAnnList } from '@src/model/api';
import { createEvent, EventsEnum, Format, useMessage } from 'alemonjs';

export default async (e: EventsEnum) => {
  const event = createEvent({
    event: e,
    selects: ['message.create', 'private.message.create']
  });
  const [message] = useMessage(event);

  const format = Format.create();
  const md = Format.createMarkdown();

  // 获取活动公告中的卡池信息
  const resp = await apiAnnList('1', 30);

  if (!resp.success || !resp.data) {
    md.addText(`[鸣潮] 卡池信息获取失败: ${resp.msg || '未知错误'}`);
    format.addMarkdown(md);
    void message.send({ format });

    return;
  }

  const poolAnnList = (resp.data.list ?? []).filter(a => /调谐|唤取|卡池/.test(a.title));

  if (poolAnnList.length === 0) {
    md.addText('[鸣潮] 当前无进行中的卡池信息');
    format.addMarkdown(md);
    void message.send({ format });

    return;
  }

  let text = '[鸣潮] 当前卡池信息：\n';

  for (const ann of poolAnnList.slice(0, 6)) {
    text += `\n📌 ${ann.title}\n   发布时间: ${ann.publishTime}\n`;
  }

  md.addText(text);
  format.addMarkdown(md);
  void message.send({ format });
};
