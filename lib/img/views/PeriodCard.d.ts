import type { PeriodDetailResp } from '@src/model/types';
import React from 'react';
interface PeriodCardProps {
    data: {
        uid: string;
        periodType: string;
        periodTitle: string;
        detail: PeriodDetailResp;
    };
}
export default function PeriodCard({ data }: PeriodCardProps): React.JSX.Element;
export {};
