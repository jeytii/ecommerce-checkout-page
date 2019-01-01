import React from 'react';

export default ({ title, children, className }) => (
	<div className={className}>
		<label className='form__label fluid'>{title}:</label>
		{children}
	</div>
)