import type { CultivateCostItem } from '@src/model/types';
import React from 'react';
interface DevelopCardProps {
    data: {
        uid: string;
        roles: {
            roleId: number;
            roleName: string;
        }[];
        costs: CultivateCostItem[];
    };
}
export default function DevelopCard({ data }: DevelopCardProps): React.JSX.Element;
export {};
