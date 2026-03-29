import type { RoleDetailResp } from '@src/model/types';
import React from 'react';
import HTML from './HTML.js';

interface CharDetailCardProps {
  data: {
    uid: string;
    detail: RoleDetailResp;
  };
}

const ATTR_COLORS: Record<string, string> = {
  冰: '#6dd5ed',
  火: '#ff6b6b',
  雷: '#d89cf6',
  光: '#ffd93d',
  暗: '#9d65c9',
  风: '#7ec8a0',
  导: '#e8d5b0'
};

export default function CharDetailCard({ data }: CharDetailCardProps) {
  const { detail } = data;
  const { role, level, chainList, weaponData, phantomData, skillList } = detail;
  const attrColor = ATTR_COLORS[role.attributeName] ?? '#ffffff';

  const unlockedChains = chainList?.filter(c => c.unlocked).length ?? 0;

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
        {/* 头部 — 角色信息 */}
        <div
          style={{
            background: 'linear-gradient(135deg, #e8d5b0, #d3bc8e)',
            borderRadius: '12px',
            padding: '16px 20px',
            marginBottom: '16px',
            color: '#2d2d2d',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}
        >
          {role.roleIconUrl && (
            <img
              src={role.roleIconUrl}
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                border: `3px solid ${attrColor}`,
                objectFit: 'cover'
              }}
            />
          )}
          <div>
            <div style={{ fontSize: '22px', fontWeight: 'bold' }}>{role.roleName}</div>
            <div style={{ fontSize: '13px', opacity: 0.7, marginTop: '4px' }}>
              Lv.{level} | {'★'.repeat(role.starLevel)} | 共鸣链 {unlockedChains}/{chainList?.length ?? 0}
            </div>
            <div style={{ fontSize: '12px', marginTop: '2px' }}>
              <span style={{ color: attrColor }}>◆ {role.attributeName}</span>
              <span style={{ marginLeft: '10px', opacity: 0.7 }}>UID: {data.uid}</span>
            </div>
          </div>
        </div>

        {/* 武器 */}
        {weaponData && (
          <div
            style={{
              background: 'rgba(255,255,255,0.08)',
              borderRadius: '10px',
              padding: '14px 16px',
              marginBottom: '12px'
            }}
          >
            <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px', color: '#e8d5b0' }}>武器</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {weaponData.weaponIcon && (
                <img src={weaponData.weaponIcon} style={{ width: '52px', height: '52px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)' }} />
              )}
              <div>
                <div style={{ fontSize: '15px', fontWeight: 'bold' }}>{weaponData.weaponName}</div>
                <div style={{ fontSize: '12px', opacity: 0.7, marginTop: '2px' }}>
                  Lv.{weaponData.level} | {'★'.repeat(weaponData.weaponStarLevel)} | 谐振 R{weaponData.resonLevel}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 技能列表 */}
        {skillList && skillList.length > 0 && (
          <div
            style={{
              background: 'rgba(255,255,255,0.08)',
              borderRadius: '10px',
              padding: '14px 16px',
              marginBottom: '12px'
            }}
          >
            <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px', color: '#e8d5b0' }}>技能</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {skillList.map((skill, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    minWidth: '120px'
                  }}
                >
                  {skill.iconUrl && <img src={skill.iconUrl} style={{ width: '28px', height: '28px', borderRadius: '4px' }} />}
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 'bold' }}>{skill.skillName}</div>
                    <div style={{ fontSize: '11px', opacity: 0.6 }}>Lv.{skill.level}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 声骸列表 */}
        {phantomData?.equipPhantomList && (
          <div
            style={{
              background: 'rgba(255,255,255,0.08)',
              borderRadius: '10px',
              padding: '14px 16px',
              marginBottom: '12px'
            }}
          >
            <div
              style={{
                fontSize: '14px',
                fontWeight: 'bold',
                marginBottom: '8px',
                color: '#e8d5b0',
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <span>声骸</span>
              <span style={{ fontSize: '12px', opacity: 0.6, fontWeight: 'normal' }}>Cost: {phantomData.cost}</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {phantomData.equipPhantomList
                .filter(ep => ep.phantomProp)
                .map((ep, i) => {
                  const p = ep.phantomProp!;

                  return (
                    <div
                      key={i}
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        borderRadius: '8px',
                        padding: '8px 10px',
                        width: '130px',
                        boxSizing: 'border-box'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                        {p.icon && <img src={p.icon} style={{ width: '28px', height: '28px', borderRadius: '4px' }} />}
                        <div>
                          <div style={{ fontSize: '11px', fontWeight: 'bold', lineHeight: '1.2' }}>{p.name}</div>
                          <div style={{ fontSize: '10px', opacity: 0.5 }}>
                            Lv.{p.level} C{p.cost}
                          </div>
                        </div>
                      </div>
                      {/* 主词条 */}
                      {p.mainProps && p.mainProps.length > 0 && (
                        <div style={{ fontSize: '10px', color: '#e8d5b0', marginTop: '2px' }}>
                          {p.mainProps.map((mp, j) => (
                            <div key={j}>
                              {mp.attributeName}: {mp.attributeValue}
                            </div>
                          ))}
                        </div>
                      )}
                      {/* 副词条 */}
                      {p.phantomProp && p.phantomProp.length > 0 && (
                        <div style={{ fontSize: '9px', opacity: 0.6, marginTop: '2px' }}>
                          {p.phantomProp.map((sp, j) => (
                            <div key={j}>
                              {sp.attributeName}: {sp.attributeValue}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {/* 共鸣链 */}
        {chainList && chainList.length > 0 && (
          <div
            style={{
              background: 'rgba(255,255,255,0.08)',
              borderRadius: '10px',
              padding: '14px 16px'
            }}
          >
            <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px', color: '#e8d5b0' }}>
              共鸣链 ({unlockedChains}/{chainList.length})
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {chainList.map((chain, i) => (
                <div
                  key={i}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: `2px solid ${chain.unlocked ? '#e8d5b0' : 'rgba(255,255,255,0.2)'}`,
                    background: chain.unlocked ? 'rgba(232,213,176,0.2)' : 'rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    opacity: chain.unlocked ? 1 : 0.4
                  }}
                >
                  {chain.order}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </HTML>
  );
}
