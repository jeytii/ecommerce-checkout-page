import React from 'react';

interface Props {
    price: number;
}

export default function ProductPrice({ price }: Props) {
    return <span className='mobile-list__price fluid'>${price}</span>;
}
