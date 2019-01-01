import React from 'react';
import { ListContext } from './List';
import Product from './Product';

export default () => (
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
				{({items}) => ( 
					items.map(({ key, image, name, color, size, quantity, price }) => (
						<Product key={key} {...{ image, name, color, size, quantity, price }} />
					))
				)}
			</ListContext.Consumer>
		</tbody>
	</table>
)