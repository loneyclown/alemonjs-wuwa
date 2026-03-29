import type { MineInfo } from '@src/model/types';
import React from 'react';
import HTML from './HTML';

interface CoinCardProps {
  data: {
    uid: string;
    mine: MineInfo;
  };
}

export default function CoinCard({ data }: CoinCardProps) {
  const { uid, mine } = data;

  return (
    <HTML>
      <div
        style={{
          padding: '24px',
          background: 'linear-gradient(180deg, #1a1b2e 0%, #252642 100%)',
          minWidth: '380px'
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
          <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#e0e4ff' }}>🪙 库洛币</div>
          <div style={{ fontSize: '13px', color: '#a0a4cc', marginTop: '4px' }}>
            {mine.userName} · UID {uid}
          </div>
        </div>

        {/* 内容 */}
        <div
          style={{
            background: '#2a2b45',
            borderRadius: '0 0 12px 12px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {/* 头像 */}
          {mine.headUrl && (
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '40px',
                overflow: 'hidden',
                border: '3px solid #a78bfa',
                marginBottom: '12px'
              }}
            >
              <img src={mine.headUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          )}

          {/* 名称 */}
          <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#e0e4ff', marginBottom: '4px' }}>{mine.userName}</div>

          {mine.signature && <div style={{ fontSize: '12px', color: '#a0a4cc', marginBottom: '16px' }}>{mine.signature}</div>}

          {/* 库洛币数量 */}
          <div
            style={{
              background: '#32334f',
              borderRadius: '12px',
              padding: '16px 32px',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '13px', color: '#a0a4cc', marginBottom: '6px' }}>库洛币余额</div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#fbbf24' }}>{mine.goldNum}</div>
          </div>

          {/* ID */}
          <div style={{ fontSize: '12px', color: '#8088bb', marginTop: '12px' }}>库街区 ID: {mine.userId}</div>
        </div>
      </div>
    </HTML>
  );
}
