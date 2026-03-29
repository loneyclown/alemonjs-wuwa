import type { AccountBaseInfo, RoleData } from '@src/model/types';
import React from 'react';
interface CharlistCardProps {
    data: {
        uid: string;
        base: AccountBaseInfo;
        roles: RoleData[];
    };
}
export default function CharlistCard({ data }: CharlistCardProps): React.JSX.Element;
export {};
