import React from 'react';
import { ListContext } from './index';
import Product from './Product';

export default function Table() {
    return (
        <table className='list__table'>
            <thead className='list__table-head'>
                <tr>
                    <th className='list__column-header fluid'>Product</th>
                    <th className='list__column-header fluid'>Size</th>
                    <th className='list__column-header fluid'>Quantity</th>
                    <th className='list__column-header fluid'>Total Price</th>
                </tr>
            </thead>
            <tbody>
                <ListContext.Consumer>
                    {value =>
                        value &&
                        value.items.map(({ key, ...item }) => (
                            <Product key={key} {...item} />
                        ))
                    }
                </ListContext.Consumer>
            </tbody>
        </table>
    );
}
