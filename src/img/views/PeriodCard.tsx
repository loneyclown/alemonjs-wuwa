import type { PeriodDetailResp } from '@src/model/types';
import React from 'react';
import HTML from './HTML.js';

interface PeriodCardProps {
  data: {
    uid: string;
    periodType: string;
    periodTitle: string;
    detail: PeriodDetailResp;
  };
}

const RESOURCE_NAMES: Record<number, string> = {
  1: '贝币',
  2: '星声',
  3: '唤声涡纹',
  4: '浮金 & 铸潮'
};

const RESOURCE_COLORS: Record<number, string> = {
  1: '#4fc3f7',
  2: '#e8d5b0',
  3: '#9c6cdb',
  4: '#ffb74d'
};

export default function PeriodCard({ data }: PeriodCardProps) {
  const { detail, periodTitle } = data;

  return (
    <HTML style={{ minWidth: '480px' }}>
      <div
        style={{
          padding: '24px',
          fontFamily: '"tttgbnumber", system-ui, sans-serif',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          color: '#ffffff'
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
          <div style={{ fontSize: '20px', fontWeight: 'bold' }}>资源统计</div>
          <div style={{ fontSize: '13px', opacity: 0.7, marginTop: '4px' }}>
            {periodTitle} | UID: {data.uid}
          </div>
        </div>

        {/* 总计 */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            marginBottom: '16px'
          }}
        >
          {detail.totalStar !== null && detail.totalStar !== undefined && (
            <div
              style={{
                flex: 1,
                background: 'rgba(232,213,176,0.15)',
                borderRadius: '10px',
                padding: '14px',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#e8d5b0' }}>{detail.totalStar}</div>
              <div style={{ fontSize: '12px', opacity: 0.6, marginTop: '4px' }}>星声总计</div>
            </div>
          )}
          {detail.totalCoin !== null && detail.totalCoin !== undefined && (
            <div
              style={{
                flex: 1,
                background: 'rgba(79,195,247,0.15)',
                borderRadius: '10px',
                padding: '14px',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#4fc3f7' }}>{detail.totalCoin}</div>
              <div style={{ fontSize: '12px', opacity: 0.6, marginTop: '4px' }}>贝币总计</div>
            </div>
          )}
        </div>

        {/* 资源明细 */}
        {detail.itemList?.map((item, i) => {
          const name = RESOURCE_NAMES[item.type] ?? `资源${item.type}`;
          const color = RESOURCE_COLORS[item.type] ?? '#ffffff';

          return (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '10px',
                padding: '14px 16px',
                marginBottom: '10px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <div style={{ fontSize: '14px', fontWeight: 'bold', color }}>{name}</div>
                <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{item.total}</div>
              </div>
              {item.detail && item.detail.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {item.detail.map((d, j) => (
                    <div
                      key={j}
                      style={{
                        fontSize: '11px',
                        background: 'rgba(255,255,255,0.06)',
                        borderRadius: '4px',
                        padding: '3px 8px'
                      }}
                    >
                      <span style={{ opacity: 0.6 }}>{d.type}: </span>
                      <span>{d.num}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </HTML>
  );
}
