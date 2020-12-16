import { bool } from 'prop-types';
import Logo from './Logo';
import SearchForm from './SearchForm';
import MobileSearch from './MobileSearch';
import Cart from './Cart';
import Menu from './Menu';

const TopBar = ({ mobileMode }) => (
    <header className='topbar flex--center'>
        <Logo />
        {mobileMode || window.innerWidth <= 500 ? (
            <MobileSearch />
        ) : (
            <SearchForm />
        )}
        <Cart />
        <Menu />
    </header>
);

TopBar.propTypes = {
    mobileMode: bool.isRequired,
};

export default TopBar;
