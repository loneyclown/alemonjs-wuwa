import type { GachaPoolStat } from '@src/model/types';
import React from 'react';
interface GachaCardProps {
    data: {
        uid: string;
        pools: GachaPoolStat[];
    };
}
export default function GachaCard({ data }: GachaCardProps): React.JSX.Element;
export {};
