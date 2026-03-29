import type { AccountBaseInfo, ExploreResp } from '@src/model/types';
import React from 'react';
interface ExploreCardProps {
    data: {
        uid: string;
        base: AccountBaseInfo;
        explore: ExploreResp;
    };
}
export default function ExploreCard({ data }: ExploreCardProps): React.JSX.Element;
export {};
