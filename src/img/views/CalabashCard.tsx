import type { CalabashResp } from '@src/model/types';
import React from 'react';
import HTML from './HTML.js';

interface CalabashCardProps {
  data: {
    uid: string;
    calabash: CalabashResp;
  };
}

export default function CalabashCard({ data }: CalabashCardProps) {
  const { calabash } = data;

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
          <div style={{ fontSize: '20px', fontWeight: 'bold' }}>数据坞</div>
          <div style={{ fontSize: '13px', opacity: 0.7, marginTop: '4px' }}>UID: {data.uid}</div>
        </div>

        {/* 基本信息 */}
        <div
          style={{
            background: 'rgba(255,255,255,0.08)',
            borderRadius: '10px',
            padding: '14px 16px',
            marginBottom: '12px',
            display: 'flex',
            justifyContent: 'space-around'
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#e8d5b0' }}>{calabash.level}</div>
            <div style={{ fontSize: '12px', opacity: 0.6, marginTop: '2px' }}>数据坞等级</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#4fc3f7' }}>{calabash.baseCatch}</div>
            <div style={{ fontSize: '12px', opacity: 0.6, marginTop: '2px' }}>基础吸收率</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#81c784' }}>{calabash.strengthenCatch}</div>
            <div style={{ fontSize: '12px', opacity: 0.6, marginTop: '2px' }}>强化吸收率</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffb74d' }}>
              {calabash.cost}/{calabash.maxCost}
            </div>
            <div style={{ fontSize: '12px', opacity: 0.6, marginTop: '2px' }}>Cost</div>
          </div>
        </div>

        {/* 声骸列表 */}
        {calabash.phantomList && calabash.phantomList.length > 0 && (
          <div
            style={{
              background: 'rgba(255,255,255,0.08)',
              borderRadius: '10px',
              padding: '14px 16px'
            }}
          >
            <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px', color: '#e8d5b0' }}>已收集声骸 ({calabash.phantomList.length})</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {calabash.phantomList.map((p, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    borderRadius: '8px',
                    padding: '8px',
                    width: '85px',
                    textAlign: 'center',
                    boxSizing: 'border-box'
                  }}
                >
                  {p.iconUrl && (
                    <img
                      src={p.iconUrl}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '6px',
                        marginBottom: '4px'
                      }}
                    />
                  )}
                  <div
                    style={{
                      fontSize: '10px',
                      lineHeight: '1.2',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {p.name}
                  </div>
                  <div style={{ fontSize: '10px', opacity: 0.5 }}>C{p.cost}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </HTML>
  );
}
