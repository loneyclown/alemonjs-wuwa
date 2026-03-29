import type { AccountBaseInfo, PhantomBattle } from '@src/model/types';
import React from 'react';
interface PokerCardProps {
    data: {
        uid: string;
        battle: PhantomBattle;
        base: AccountBaseInfo | null;
    };
}
export default function PokerCard({ data }: PokerCardProps): React.JSX.Element;
export {};
