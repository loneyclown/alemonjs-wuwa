import type { GachaPoolStatEx } from '@src/model/types';
import { LUCK_TAGS } from '@src/model/types';
import React from 'react';
import HTML from './HTML.js';

interface GachaCardProps {
  data: {
    uid: string;
    pools: GachaPoolStatEx[];
  };
}

const STAR_COLORS: Record<number, string> = {
  5: '#e8a640',
  4: '#9c6cdb',
  3: '#4a9ed6'
};

const LUCK_COLORS = ['#ff4444', '#ff8a80', '#b0bec5', '#81c784', '#ffd54f'];

export default function GachaCard({ data }: GachaCardProps) {
  return (
    <HTML>
      <div
        style={{
          padding: '24px',
          fontFamily: '"tttgbnumber", system-ui, sans-serif',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          color: '#ffffff',
          minWidth: '520px'
        }}
      >
        {/* 头部 */}
        <div
          style={{
            background: 'linear-gradient(135deg, #e8d5b0, #d3bc8e)',
            borderRadius: '12px',
            padding: '16px 20px',
            marginBottom: '16px',
            color: '#2d2d2d'
          }}
        >
          <div style={{ fontSize: '20px', fontWeight: 'bold' }}>抽卡记录</div>
          <div style={{ fontSize: '13px', opacity: 0.7, marginTop: '4px' }}>UID: {data.uid}</div>
        </div>

        {/* 各卡池统计 */}
        {data.pools.map((pool, i) => (
          <div
            key={i}
            style={{
              background: 'rgba(255,255,255,0.08)',
              borderRadius: '10px',
              padding: '14px 16px',
              marginBottom: '12px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{pool.poolName}</div>
                {/* 运气标签 */}
                <div
                  style={{
                    fontSize: '11px',
                    padding: '2px 8px',
                    borderRadius: '10px',
                    background: LUCK_COLORS[pool.luckLevel] ?? LUCK_COLORS[2],
                    color: pool.luckLevel <= 1 ? '#fff' : '#2d2d2d',
                    fontWeight: 'bold'
                  }}
                >
                  {LUCK_TAGS[pool.luckLevel] ?? '平稳保底'}
                </div>
              </div>
              <div style={{ fontSize: '12px', opacity: 0.7 }}>
                共 {pool.total} 抽 | 距上次5★: {pool.pity}抽
              </div>
            </div>

            {/* 平均抽数 */}
            <div style={{ display: 'flex', gap: '16px', fontSize: '12px', marginBottom: '8px', opacity: 0.8 }}>
              {pool.avg !== null && <span>平均: {pool.avg}抽/5★</span>}
              {pool.avgUp !== null && <span>UP均: {pool.avgUp}抽/UP</span>}
            </div>

            {/* 5星列表 */}
            {pool.star5Items.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '8px' }}>
                {pool.star5Items.map((s, j) => (
                  <div
                    key={j}
                    style={{
                      background: s.isUp ? 'rgba(232,166,64,0.25)' : 'rgba(180,180,180,0.15)',
                      border: s.isUp ? '1px solid rgba(232,166,64,0.5)' : '1px solid rgba(180,180,180,0.3)',
                      borderRadius: '6px',
                      padding: '4px 8px',
                      fontSize: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <span style={{ color: STAR_COLORS[5], fontWeight: 'bold' }}>★</span>
                    <span>{s.name}</span>
                    {s.isUp && <span style={{ color: '#ffd54f', fontSize: '10px', fontWeight: 'bold' }}>UP</span>}
                    <span style={{ color: s.count <= 70 ? '#4fc3f7' : '#ff8a80', fontSize: '11px' }}>({s.count})</span>
                  </div>
                ))}
              </div>
            )}

            {/* 统计条 */}
            <div style={{ display: 'flex', gap: '12px', fontSize: '12px' }}>
              <span style={{ color: STAR_COLORS[5] }}>★5: {pool.star5Items.length}</span>
              <span style={{ color: STAR_COLORS[4] }}>★4: {pool.star4Count}</span>
              <span style={{ color: STAR_COLORS[3] }}>★3: {pool.star3Count}</span>
            </div>
          </div>
        ))}

        {data.pools.length === 0 && <div style={{ textAlign: 'center', padding: '40px', opacity: 0.5 }}>暂无抽卡记录</div>}
      </div>
    </HTML>
  );
}
