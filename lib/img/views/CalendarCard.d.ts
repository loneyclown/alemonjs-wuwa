import React from 'react';
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
export default function CalendarCard({ data }: CalendarCardProps): React.JSX.Element;
export {};
