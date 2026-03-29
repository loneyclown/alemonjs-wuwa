import type { CultivateCostItem } from '@src/model/types';
import React from 'react';
import HTML from './HTML.js';

interface DevelopCardProps {
  data: {
    uid: string;
    roles: { roleId: number; roleName: string }[];
    costs: CultivateCostItem[];
  };
}

const QUALITY_COLORS: Record<number, string> = {
  5: '#e8a640',
  4: '#9c6cdb',
  3: '#4a9ed6',
  2: '#6eb86e',
  1: '#9e9e9e'
};

const QUALITY_BG: Record<number, string> = {
  5: 'rgba(232,166,64,0.15)',
  4: 'rgba(156,108,219,0.15)',
  3: 'rgba(74,158,214,0.15)',
  2: 'rgba(110,184,110,0.15)',
  1: 'rgba(158,158,158,0.15)'
};

export default function DevelopCard({ data }: DevelopCardProps) {
  return (
    <HTML>
      <div
        style={{
          padding: '24px',
          fontFamily: '"tttgbnumber", system-ui, sans-serif',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          color: '#ffffff',
          minWidth: '560px'
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
          <div style={{ fontSize: '20px', fontWeight: 'bold' }}>角色培养计算</div>
          <div style={{ fontSize: '13px', opacity: 0.7, marginTop: '4px' }}>
            UID: {data.uid} | 共 {data.roles.length} 个角色
          </div>
        </div>

        {/* 角色列表 */}
        <div
          style={{
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '10px',
            padding: '12px 16px',
            marginBottom: '12px'
          }}
        >
          <div style={{ fontSize: '13px', color: '#e8d5b0', marginBottom: '8px' }}>计算角色</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {data.roles.map((r, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '6px',
                  padding: '3px 10px',
                  fontSize: '12px'
                }}
              >
                {r.roleName}
              </div>
            ))}
          </div>
        </div>

        {/* 材料总需求 */}
        <div
          style={{
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '10px',
            padding: '14px 16px'
          }}
        >
          <div style={{ fontSize: '14px', color: '#e8d5b0', marginBottom: '12px' }}>总计所需材料 ({data.costs.length} 种)</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {data.costs.map((cost, i) => (
              <div
                key={i}
                style={{
                  background: QUALITY_BG[cost.quality] ?? QUALITY_BG[1],
                  border: `1px solid ${QUALITY_COLORS[cost.quality] ?? QUALITY_COLORS[1]}44`,
                  borderRadius: '8px',
                  padding: '10px 12px',
                  width: '140px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                {cost.iconUrl && <img src={cost.iconUrl} style={{ width: '48px', height: '48px', objectFit: 'contain' }} />}
                <div
                  style={{
                    fontSize: '11px',
                    textAlign: 'center',
                    color: QUALITY_COLORS[cost.quality] ?? '#fff',
                    lineHeight: '1.3'
                  }}
                >
                  {cost.name}
                </div>
                <div style={{ fontSize: '16px', fontWeight: 'bold' }}>×{cost.num.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>

        {data.costs.length === 0 && <div style={{ textAlign: 'center', padding: '40px', opacity: 0.5 }}>所有角色已满级</div>}
      </div>
    </HTML>
  );
}
