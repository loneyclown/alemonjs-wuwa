import React from 'react';
interface Props {
    data: {
        qrDataUrl: string;
    };
}
export default function LoginHelpCard({ data }: Props): React.JSX.Element;
export declare function generateQrDataUrl(): Promise<string>;
export {};
