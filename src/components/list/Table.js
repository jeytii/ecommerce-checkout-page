import { ListContext } from './List';
import Product from './Product';

const Table = () => (
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
                {({ items }) =>
                    items.map(item => <Product key={item.key} {...item} />)
                }
            </ListContext.Consumer>
        </tbody>
    </table>
);

export default Table;
