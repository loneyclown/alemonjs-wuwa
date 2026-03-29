import type { RoleDetailResp } from '@src/model/types';
import React from 'react';
interface CharDetailCardProps {
    data: {
        uid: string;
        detail: RoleDetailResp;
    };
}
export default function CharDetailCard({ data }: CharDetailCardProps): React.JSX.Element;
export {};
