import React from 'react';
import SearchForm from './SearchForm';
import Logo from '_icons/Logo';
import Search from '_icons/Search';
import Cart from '_icons/Cart';
import Menu from '_icons/Menu';

interface Props {
    mobileMode: boolean;
}

export default function TopBar({ mobileMode }: Props) {
    return (
        <header className='topbar flex--center'>
            <a href=''>
                <Logo />
            </a>

            {mobileMode ? (
                <button className='topbar__mobile-search'>
                    <Search />
                </button>
            ) : (
                <SearchForm />
            )}

            <a href='' className='topbar__cart flex--center'>
                <Cart />
                <span className='topbar__cart-label'>0</span>
            </a>

            <button className='topbar__menu'>
                <Menu />
            </button>
        </header>
    );
}
