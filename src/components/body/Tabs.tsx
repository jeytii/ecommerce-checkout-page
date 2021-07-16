import React, { MouseEvent } from 'react';

interface Props {
    component: 'list' | 'form';
    toggleComponent(
        component: 'list' | 'form',
        e: MouseEvent<HTMLButtonElement>
    ): void;
}

export default function Tabs({ component, toggleComponent }: Props) {
    return (
        <div className='tabs flex--stretch'>
            <button
                className={`tab flex--1 ${
                    component === 'list' ? 'active' : ''
                }`}
                onClick={toggleComponent.bind(null, 'list')}>
                Shopping Cart
            </button>

            <button
                className={`tab flex--1 ${
                    component === 'form' ? 'active' : ''
                }`}
                onClick={toggleComponent.bind(null, 'form')}>
                Payment
            </button>
        </div>
    );
}
