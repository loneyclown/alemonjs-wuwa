import React from 'react';
interface PoolInfo {
    poolName: string;
    type: 'char' | 'weapon';
    dateRange?: [string, string];
    status: string;
    timeLeft: string;
    isActive: boolean;
    items: string[];
}
interface PoolCardProps {
    data: {
        pools: PoolInfo[];
    };
}
export default function PoolCard({ data }: PoolCardProps): React.JSX.Element;
export {};
