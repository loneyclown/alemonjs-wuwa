import type { AnnItem } from '@src/model/types';
import React from 'react';
interface AnnCardProps {
    data: {
        activities: AnnItem[];
        infos: AnnItem[];
        notices: AnnItem[];
    };
}
export default function AnnCard({ data }: AnnCardProps): React.JSX.Element;
export {};
