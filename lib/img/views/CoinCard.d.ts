import type { MineInfo } from '@src/model/types';
import React from 'react';
interface CoinCardProps {
    data: {
        uid: string;
        mine: MineInfo;
    };
}
export default function CoinCard({ data }: CoinCardProps): React.JSX.Element;
export {};
