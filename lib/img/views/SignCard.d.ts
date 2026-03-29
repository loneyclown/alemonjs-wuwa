import type { SignInitResp } from '@src/model/types';
import React from 'react';
interface SignCardProps {
    data: {
        uid: string;
        sign: SignInitResp;
    };
}
export default function SignCard({ data }: SignCardProps): React.JSX.Element;
export {};
