import React from 'react';
import { CrossIcon } from '../icons';

export default ({ baseClass }) => (
	<button className={`${baseClass}__remove-button`} title='Remove'><CrossIcon /></button>
)