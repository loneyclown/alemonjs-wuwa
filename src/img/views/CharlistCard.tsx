import type { AccountBaseInfo, RoleData } from '@src/model/types';
import React from 'react';
import HTML from './HTML';

interface CharlistCardProps {
  data: {
    uid: string;
    base: AccountBaseInfo;
    roles: RoleData[];
  };
}

const STAR_COLORS: Record<number, string> = {
  5: '#fbbf24',
  4: '#a78bfa',
  3: '#60a5fa'
};

const ATTR_COLORS: Record<string, string> = {
  冰: '#3598db',
  火: '#ba372a',
  雷: '#b96ad9',
  风: '#169179',
  光: '#e6bf2e',
  暗: '#d97a24',
  共鸣: '#48c4d8'
};

export default function CharlistCard({ data }: CharlistCardProps) {
  const { uid, base, roles } = data;

  // 按星级降序, 同星级按等级降序
  const sorted = [...roles].sort((a, b) => {
    if (b.starLevel !== a.starLevel) {
      return b.starLevel - a.starLevel;
    }

    return b.level - a.level;
  });

  const star5 = sorted.filter(r => r.starLevel === 5);
  const star4 = sorted.filter(r => r.starLevel === 4);

  return (
    <HTML style={{ minWidth: '680px' }}>
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
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div>
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#e0e4ff' }}>📊 练度统计</div>
            <div style={{ fontSize: '13px', color: '#a0a4cc', marginTop: '4px' }}>
              {base.name} · Lv.{base.level} · UID {uid}
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '14px', color: '#e0e4ff' }}>共 {roles.length} 个角色</div>
            <div style={{ fontSize: '12px', color: '#a0a4cc', marginTop: '2px' }}>
              ⭐5: {star5.length} · ⭐4: {star4.length}
            </div>
          </div>
        </div>

        {/* 角色网格 */}
        <div
          style={{
            background: '#2a2b45',
            borderRadius: '0 0 12px 12px',
            padding: '16px'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px'
            }}
          >
            {sorted.map((role, i) => {
              const starColor = STAR_COLORS[role.starLevel] || '#9ca3af';
              const attrColor = ATTR_COLORS[role.attributeName] || '#8b95a5';

              return (
                <div
                  key={i}
                  style={{
                    width: '120px',
                    background: '#32334f',
                    borderRadius: '10px',
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderBottom: `3px solid ${starColor}`
                  }}
                >
                  {/* 角色图标 */}
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '28px',
                      overflow: 'hidden',
                      marginBottom: '6px',
                      border: `2px solid ${starColor}`
                    }}
                  >
                    {role.roleIconUrl ? (
                      <img src={role.roleIconUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <div
                        style={{
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(135deg, #3a3d6b, #5a5d9b)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '20px',
                          color: '#e0e4ff'
                        }}
                      >
                        {role.roleName[0]}
                      </div>
                    )}
                  </div>
                  {/* 名字 */}
                  <div
                    style={{
                      fontSize: '12px',
                      fontWeight: 'bold',
                      color: '#e0e4ff',
                      textAlign: 'center',
                      lineHeight: '1.2',
                      marginBottom: '4px'
                    }}
                  >
                    {role.roleName}
                  </div>
                  {/* Lv + 属性 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ fontSize: '12px', color: '#e0e4ff', fontWeight: 'bold' }}>Lv.{role.level}</span>
                    <span
                      style={{
                        fontSize: '10px',
                        color: attrColor,
                        background: 'rgba(255,255,255,0.08)',
                        borderRadius: '4px',
                        padding: '1px 4px'
                      }}
                    >
                      {role.attributeName}
                    </span>
                  </div>
                  {/* 命座 */}
                  <div style={{ fontSize: '11px', color: '#a0a4cc', marginTop: '3px' }}>命座 {role.chainCount}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </HTML>
  );
}
