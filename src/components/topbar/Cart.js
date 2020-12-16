import { CartIcon } from '../icons';

const Cart = () => (
    <a href='' className='topbar__cart flex--center'>
        <CartIcon />
        <span className='topbar__cart-label'>0</span>
    </a>
);

export default Cart;
