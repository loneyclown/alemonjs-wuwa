import type { RankEntry } from '@src/model/types';
import React from 'react';
interface RankCardProps {
    data: {
        uid: string;
        playerName: string;
        entries: RankEntry[];
    };
}
export default function RankCard({ data }: RankCardProps): React.JSX.Element;
export {};
