import type { RoleDetailResp } from '@src/model/types';
import React from 'react';
interface WikiCardProps {
    data: {
        uid: string;
        detail: RoleDetailResp;
        queryType: string;
    };
}
export default function WikiCard({ data }: WikiCardProps): React.JSX.Element;
export {};
