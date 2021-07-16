import React from 'react';
import ProductInfo from './ProductInfo';
import ProductSize from './ProductSize';
import ProductQuantity from './ProductQuantity';
import ProductPrice from './ProductPrice';
import Cross from '_icons/Cross';

interface Props {
    image: string;
    name: string;
    color: string;
    size: string | number;
    quantity: number;
    price: number;
}

export default function Product({ size, quantity, price, ...props }: Props) {
    return (
        <tr className='list__row'>
            <td>
                <ProductInfo baseClass='list' {...props} />
            </td>
            <td>
                <ProductSize baseClass='list' {...{ size }} />
            </td>
            <td>
                <ProductQuantity baseClass='list' {...{ quantity }} />
            </td>
            <td>
                <ProductPrice {...{ price }} />
            </td>
            <td>
                <button className='list__remove-button' title='Remove'>
                    <Cross />
                </button>
            </td>
        </tr>
    );
}
