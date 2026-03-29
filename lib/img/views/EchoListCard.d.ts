import type { EchoRankItem } from '@src/model/types';
import React from 'react';
interface EchoListCardProps {
    data: {
        uid: string;
        playerName: string;
        echoes: EchoRankItem[];
        page: number;
        totalPages: number;
    };
}
export default function EchoListCard({ data }: EchoListCardProps): React.JSX.Element;
export {};
