import React from 'react';
interface PoolItem {
    title: string;
    publishTime: string;
}
interface PoolCardProps {
    data: {
        pools: PoolItem[];
    };
}
export default function PoolCard({ data }: PoolCardProps): React.JSX.Element;
export {};
