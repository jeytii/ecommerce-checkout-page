import React, { createContext } from 'react';
import Table from './Table';
import MobileList from './MobileList';
import ChevronLeft from '_icons/ChevronLeft';

interface Props {
    mobileMode: boolean;
}

interface Product {
    key: number;
    image: string;
    name: string;
    color: string;
    size: number | string;
    quantity: number;
    price: number;
}

const items = [
    {
        key: 1,
        image: 'https://res.cloudinary.com/dt9ntq5vr/image/upload/v1626176549/Ecommerce%20landing%20page/jacket_vjm7l8.jpg',
        name: 'Henley T-Shirt',
        color: 'Dark Gray',
        size: 'S',
        quantity: 2,
        price: 39.98,
    },
    {
        key: 2,
        image: 'https://res.cloudinary.com/dt9ntq5vr/image/upload/v1626176549/Ecommerce%20landing%20page/shoes_cpzd4a.jpg',
        name: 'High Top Sneakers',
        color: 'Brown',
        size: 10.5,
        quantity: 1,
        price: 69.99,
    },
    {
        key: 3,
        image: 'https://res.cloudinary.com/dt9ntq5vr/image/upload/v1626176549/Ecommerce%20landing%20page/shirt_bon8sk.jpg',
        name: 'Sweater Hooded',
        color: 'Light Gray',
        size: 'S',
        quantity: 1,
        price: 39.99,
    },
];

export const ListContext = createContext<{ items: Product[] } | null>(null);

export default function List({ mobileMode }: Props) {
    return (
        <section className='list'>
            <h1 className='list__heading heading'>Shopping Cart.</h1>

            <ListContext.Provider value={{ items }}>
                {mobileMode ? <MobileList /> : <Table />}
            </ListContext.Provider>

            <section className='list__bottom flex--stretch'>
                <div className='list__bottom-section'>
                    <button className='list__back-button flex--center fluid'>
                        <span>
                            <ChevronLeft />
                        </span>
                        <span className='list__button-label'>
                            Continue Shopping
                        </span>
                    </button>
                </div>
                <div>
                    <label className='list__cost-label fluid'>
                        <span className='list__cost-title bold fluid'>
                            Subtotal:
                        </span>
                        <span className='fluid'>$149.00</span>
                    </label>
                    <label className='list__cost-label fluid'>
                        <span className='list__cost-title bold fluid'>
                            Shipping:
                        </span>
                        <span className='fluid'>
                            <b className='color--palewhite fluid'>$9.99</b> $0
                        </span>
                    </label>
                    <label className='list__cost-label fluid'>
                        <span className='list__cost-title bold fluid'>
                            Total:
                        </span>
                        <span className='fluid'>$149.00</span>
                    </label>
                </div>
            </section>
        </section>
    );
}
