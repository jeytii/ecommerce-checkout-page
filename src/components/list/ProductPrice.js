import { string } from 'prop-types';

const ProductPrice = ({ price }) => (
    <span className='mobile-list__price fluid'>{price}</span>
);

ProductPrice.propTypes = {
    price: string.isRequired,
};

export default ProductPrice;
