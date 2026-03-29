import type { GachaPoolStatEx } from '@src/model/types';
import React from 'react';
interface GachaCardProps {
    data: {
        uid: string;
        pools: GachaPoolStatEx[];
    };
}
export default function GachaCard({ data }: GachaCardProps): React.JSX.Element;
export {};
