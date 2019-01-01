import React from 'react';
import Logo from './Logo';
import SearchForm from './SearchForm';
import MobileSearch from './MobileSearch';
import Cart from './Cart';
import Menu from './Menu';

export default ({ mobileMode }) => (
	<header className='topbar flex--center'>
		<Logo />
		{
			(mobileMode || window.innerWidth <= 500)
			? <MobileSearch />
			: <SearchForm />
		}
		<Cart />
		<Menu />
	</header>
)