import React from  'react';
import { SearchIcon } from '../icons';

export default () => (
	<section className='topbar__search'>
		<form action="" className='topbar__search-form flex--center'>
			
			<input
				className='topbar__search-input transparent'
				type="text"
				name="query"
				id="query"
				placeholder="Search" />
			
			<button type="submit" className='topbar__search-submit'>
				<SearchIcon />
			</button>
		
		</form>
	</section>
)