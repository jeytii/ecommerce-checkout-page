import React from 'react';

interface Props {
    fill: string;
}

export default function Minus({ fill }: Props) {
    return (
        <svg
            width='10'
            height='2'
            viewBox='0 0 10 2'
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'>
            <rect width='10' height='2' rx='1' fill='#19202C' />
        </svg>
    );
}
