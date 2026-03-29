import React from 'react';
import HTML from './HTML.js';

interface PoolItem {
  title: string;
  publishTime: string;
}

interface PoolCardProps {
  data: {
    pools: PoolItem[];
  };
}

export default function PoolCard({ data }: PoolCardProps) {
  return (
    <HTML>
      <div
        style={{
          padding: '24px',
          fontFamily: '"tttgbnumber", system-ui, sans-serif',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          color: '#ffffff',
          minWidth: '480px'
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
          <div style={{ fontSize: '20px', fontWeight: 'bold' }}>当前卡池</div>
          <div style={{ fontSize: '13px', opacity: 0.7, marginTop: '4px' }}>共 {data.pools.length} 个进行中</div>
        </div>

        {/* 卡池列表 */}
        {data.pools.map((pool, i) => (
          <div
            key={i}
            style={{
              background: 'rgba(255,255,255,0.08)',
              borderRadius: '10px',
              padding: '14px 16px',
              marginBottom: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #e8a640, #d3bc8e)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                flexShrink: 0
              }}
            >
              📌
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{pool.title}</div>
              <div style={{ fontSize: '11px', opacity: 0.6, marginTop: '4px' }}>{pool.publishTime}</div>
            </div>
          </div>
        ))}

        {data.pools.length === 0 && <div style={{ textAlign: 'center', padding: '40px', opacity: 0.5 }}>当前无进行中的卡池</div>}
      </div>
    </HTML>
  );
}
