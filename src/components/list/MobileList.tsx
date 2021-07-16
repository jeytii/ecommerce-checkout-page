import React from 'react';
import { ListContext } from './index';
import ProductInfo from './ProductInfo';
import ProductSize from './ProductSize';
import ProductQuantity from './ProductQuantity';
import ProductPrice from './ProductPrice';
import Cross from '_icons/Cross';

export default function MobileList() {
    return (
        <section className='mobile-list'>
            <ListContext.Consumer>
                {value =>
                    value &&
                    value.items.map(
                        ({ key, size, quantity, price, ...rest }) => (
                            <div
                                key={key}
                                className='mobile-list__product flex--center'>
                                <ProductInfo
                                    {...rest}
                                    baseClass='mobile-list'
                                />
                                <div className='mobile-list__numbers flex--1'>
                                    <ProductSize
                                        {...{ size }}
                                        baseClass='mobile-list'
                                    />
                                    <ProductQuantity
                                        {...{ quantity }}
                                        baseClass='mobile-list'
                                    />
                                    <ProductPrice {...{ price }} />
                                </div>

                                <button
                                    className='mobile-lest__remove-button'
                                    title='Remove'>
                                    <Cross />
                                </button>
                            </div>
                        )
                    )
                }
            </ListContext.Consumer>
        </section>
    );
}
