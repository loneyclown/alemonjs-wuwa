import type { AnnItem } from '@src/model/types';
import React from 'react';
import HTML from './HTML';

interface AnnCardProps {
  data: {
    activities: AnnItem[];
    notices: AnnItem[];
  };
}

function AnnSection({ title, icon, items }: { title: string; icon: string; items: AnnItem[] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div style={{ marginBottom: '12px' }}>
      <div
        style={{
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#a78bfa',
          marginBottom: '8px',
          borderLeft: '3px solid #a78bfa',
          paddingLeft: '10px'
        }}
      >
        {icon} {title}
      </div>

      {items.map((item, i) => (
        <div
          key={i}
          style={{
            background: '#32334f',
            borderRadius: '10px',
            padding: '12px',
            marginBottom: '8px',
            display: 'flex',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          {/* 封面 */}
          {item.coverUrl && (
            <div
              style={{
                width: '100px',
                height: '56px',
                borderRadius: '6px',
                overflow: 'hidden',
                flexShrink: 0
              }}
            >
              <img src={item.coverUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          )}
          {/* 文本 */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#e0e4ff',
                lineHeight: '1.3',
                marginBottom: '4px'
              }}
            >
              {item.title}
            </div>
            <div style={{ fontSize: '11px', color: '#8088bb' }}>{item.publishTime}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function AnnCard({ data }: AnnCardProps) {
  const { activities, notices } = data;

  return (
    <HTML style={{ minWidth: '480px' }}>
      <div
        style={{
          padding: '24px',
          background: 'linear-gradient(180deg, #1a1b2e 0%, #252642 100%)'
        }}
      >
        {/* 头部 */}
        <div
          style={{
            background: 'linear-gradient(135deg, #3a3d6b, #5a5d9b)',
            borderRadius: '12px 12px 0 0',
            padding: '16px 20px'
          }}
        >
          <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#e0e4ff' }}>📰 游戏公告</div>
          <div style={{ fontSize: '13px', color: '#a0a4cc', marginTop: '4px' }}>鸣潮 · 最新资讯</div>
        </div>

        {/* 内容 */}
        <div
          style={{
            background: '#2a2b45',
            borderRadius: '0 0 12px 12px',
            padding: '16px'
          }}
        >
          <AnnSection title='当前活动' icon='🎉' items={activities} />
          <AnnSection title='游戏公告' icon='📋' items={notices} />
        </div>
      </div>
    </HTML>
  );
}
