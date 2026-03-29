import type { AccountBaseInfo, TowerResp } from '@src/model/types';
import React from 'react';
import HTML from './HTML';

interface ChallengeCardProps {
  data: {
    uid: string;
    base: AccountBaseInfo;
    challenge: TowerResp;
    title: string;
    icon: string;
  };
}

export default function ChallengeCard({ data }: ChallengeCardProps) {
  const { uid, base, challenge, title, icon } = data;

  if (!challenge.isUnlock) {
    return (
      <HTML style={{ minWidth: '420px' }}>
        <div
          style={{
            padding: '24px',
            background: 'linear-gradient(180deg, #1a1b2e 0%, #252642 100%)'
          }}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, #3a3d6b, #5a5d9b)',
              borderRadius: '12px',
              padding: '16px 20px'
            }}
          >
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#e0e4ff' }}>
              {icon} {title}
            </div>
            <div style={{ fontSize: '13px', color: '#a0a4cc', marginTop: '4px' }}>
              {base.name} · UID {uid}
            </div>
            <div style={{ fontSize: '14px', color: '#fbbf24', marginTop: '12px' }}>⚠️ {title}尚未解锁</div>
          </div>
        </div>
      </HTML>
    );
  }

  const difficulties = challenge.difficultyList || [];

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
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#e0e4ff' }}>
              {icon} {title}
            </div>
            <div style={{ fontSize: '13px', color: '#a0a4cc', marginTop: '4px' }}>
              {base.name} · Lv.{base.level} · UID {uid}
            </div>
          </div>
        </div>

        {/* 内容 */}
        <div
          style={{
            background: '#2a2b45',
            borderRadius: '0 0 12px 12px',
            padding: '16px'
          }}
        >
          {difficulties.map((diff, di) => (
            <div key={di} style={{ marginBottom: di < difficulties.length - 1 ? '14px' : '0' }}>
              <div
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#a78bfa',
                  marginBottom: '10px',
                  borderLeft: '3px solid #a78bfa',
                  paddingLeft: '10px'
                }}
              >
                {diff.difficultyName}
              </div>

              {diff.towerAreaList.map((area, ai) => (
                <div
                  key={ai}
                  style={{
                    background: '#32334f',
                    borderRadius: '10px',
                    padding: '12px',
                    marginBottom: ai < diff.towerAreaList.length - 1 ? '8px' : '0'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '8px'
                    }}
                  >
                    <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#e0e4ff' }}>{area.areaName}</span>
                    <span style={{ fontSize: '13px', color: '#fbbf24' }}>
                      ⭐ {area.star}/{area.maxStar}
                    </span>
                  </div>

                  {area.floorList.map((floor, fi) => (
                    <div
                      key={fi}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '4px 0',
                        borderTop: fi > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none'
                      }}
                    >
                      <span style={{ fontSize: '13px', color: '#c0c4ee' }}>{floor.floorName}</span>
                      <span style={{ fontSize: '13px', color: floor.star >= floor.maxStar ? '#10b981' : '#9ca3af' }}>
                        {'★'.repeat(floor.star)}
                        {'☆'.repeat(Math.max(0, floor.maxStar - floor.star))}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </HTML>
  );
}
