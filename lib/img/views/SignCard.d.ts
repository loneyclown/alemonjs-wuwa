import type { SignInitResp } from '@src/model/types';
import React from 'react';
interface SignCardProps {
    data: {
        uid: string;
        sign: SignInitResp;
        signMsg?: string;
    };
}
export default function SignCard({ data }: SignCardProps): React.JSX.Element;
export {};
