import React from 'react';
interface CalendarEvent {
    title: string;
    type: 'gacha' | 'tower' | 'activity';
    dateRange?: [string, string];
    status: string;
    timeLeft: string;
    isActive: boolean;
    iconUrl?: string;
}
interface CalendarCardProps {
    data: {
        events: CalendarEvent[];
    };
}
export default function CalendarCard({ data }: CalendarCardProps): React.JSX.Element;
export {};
