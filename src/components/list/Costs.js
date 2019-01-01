import React, { Fragment } from 'react';

export default () => (
	<Fragment>
		<label className='list__cost-label fluid'>
			<span className='list__cost-title bold fluid'>Subtotal:</span>
			<span className='fluid'>$149.00</span>
		</label>
		<label className='list__cost-label fluid'>
			<span className='list__cost-title bold fluid'>Shipping:</span>
			<span className='fluid'><b className='color--palewhite fluid'>$9.99</b> $0</span>
		</label>
		<label className='list__cost-label fluid'>
			<span className='list__cost-title bold fluid'>Total:</span>
			<span className='fluid'>$149.00</span>
		</label>
	</Fragment>
)