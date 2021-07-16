import React from 'react';
import Minus from '_icons/Minus';
import Plus from '_icons/Plus';

interface Props {
    baseClass: string;
    quantity: number;
}

export default function ProductQuantity({ baseClass, quantity }: Props) {
    return (
        <div className={`${baseClass}__range`}>
            <button
                className={`${baseClass}__button fluid`}
                disabled={quantity < 2}>
                <Minus fill={quantity < 2 ? '#D4D3D3' : '#19202C'} />
            </button>
            <label className='fluid'>{quantity}</label>
            <button className={`${baseClass}__button fluid`}>
                <Plus />
            </button>
        </div>
    );
}
