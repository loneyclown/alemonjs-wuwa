import React from 'react';
import HTML from './HTML.js';

interface CalendarEvent {
  title: string;
  startTime: string;
  endTime: string;
  type: string;
  isActive: boolean;
}

interface CalendarCardProps {
  data: {
    events: CalendarEvent[];
  };
}

const TYPE_COLORS: Record<string, { bg: string; border: string }> = {
  gacha: { bg: 'rgba(232,166,64,0.2)', border: 'rgba(232,166,64,0.5)' },
  activity: { bg: 'rgba(79,195,247,0.2)', border: 'rgba(79,195,247,0.5)' },
  tower: { bg: 'rgba(156,108,219,0.2)', border: 'rgba(156,108,219,0.5)' },
  other: { bg: 'rgba(255,255,255,0.08)', border: 'rgba(255,255,255,0.2)' }
};

const TYPE_LABELS: Record<string, string> = {
  gacha: '调谐',
  activity: '活动',
  tower: '挑战',
  other: '其他'
};

export default function CalendarCard({ data }: CalendarCardProps) {
  const activeEvents = data.events.filter(e => e.isActive);
  const upcomingEvents = data.events.filter(e => !e.isActive);

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
        <div
          style={{
            background: 'linear-gradient(135deg, #e8d5b0, #d3bc8e)',
            borderRadius: '12px',
            padding: '16px 20px',
            marginBottom: '16px',
            color: '#2d2d2d'
          }}
        >
          <div style={{ fontSize: '20px', fontWeight: 'bold' }}>活动日历</div>
          <div style={{ fontSize: '13px', opacity: 0.7, marginTop: '4px' }}>鸣潮活动与卡池信息</div>
        </div>

        {/* 进行中 */}
        {activeEvents.length > 0 && (
          <div style={{ marginBottom: '16px' }}>
            <div style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '8px', color: '#81c784' }}>进行中 ({activeEvents.length})</div>
            {activeEvents.map((evt, i) => {
              const colors = TYPE_COLORS[evt.type] ?? TYPE_COLORS.other;

              return (
                <div
                  key={i}
                  style={{
                    background: colors.bg,
                    border: `1px solid ${colors.border}`,
                    borderRadius: '8px',
                    padding: '10px 14px',
                    marginBottom: '8px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '13px', fontWeight: 'bold' }}>{evt.title}</div>
                    <div
                      style={{
                        fontSize: '10px',
                        background: colors.border,
                        borderRadius: '4px',
                        padding: '2px 6px',
                        color: '#fff'
                      }}
                    >
                      {TYPE_LABELS[evt.type] ?? '其他'}
                    </div>
                  </div>
                  <div style={{ fontSize: '11px', opacity: 0.6, marginTop: '4px' }}>
                    {evt.startTime} ~ {evt.endTime}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 即将开始 */}
        {upcomingEvents.length > 0 && (
          <div>
            <div style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '8px', color: '#ffb74d' }}>即将开始 ({upcomingEvents.length})</div>
            {upcomingEvents.map((evt, i) => {
              const colors = TYPE_COLORS[evt.type] ?? TYPE_COLORS.other;

              return (
                <div
                  key={i}
                  style={{
                    background: colors.bg,
                    border: `1px solid ${colors.border}`,
                    borderRadius: '8px',
                    padding: '10px 14px',
                    marginBottom: '8px',
                    opacity: 0.7
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '13px', fontWeight: 'bold' }}>{evt.title}</div>
                    <div
                      style={{
                        fontSize: '10px',
                        background: colors.border,
                        borderRadius: '4px',
                        padding: '2px 6px',
                        color: '#fff'
                      }}
                    >
                      {TYPE_LABELS[evt.type] ?? '其他'}
                    </div>
                  </div>
                  <div style={{ fontSize: '11px', opacity: 0.6, marginTop: '4px' }}>
                    {evt.startTime} ~ {evt.endTime}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {data.events.length === 0 && <div style={{ textAlign: 'center', padding: '40px', opacity: 0.5 }}>暂无活动信息</div>}
      </div>
    </HTML>
  );
}
