import { string } from 'prop-types';

const ProductSize = ({ baseClass, size }) => (
    <div>
        <select className={`${baseClass}__select fluid`} name='size' id='size'>
            <option value={size}>{size}</option>
        </select>
    </div>
);

ProductSize.propTypes = {
    baseClass: string.isRequired,
    size: string.isRequired,
};

export default ProductSize;
