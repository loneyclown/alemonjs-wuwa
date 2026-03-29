import type { AccountBaseInfo, RoleData } from '@src/model/types';
import React from 'react';
interface RoleInfoCardProps {
    data: {
        uid: string;
        base: AccountBaseInfo;
        roles: RoleData[];
    };
}
export default function RoleInfoCard({ data }: RoleInfoCardProps): React.JSX.Element;
export {};
