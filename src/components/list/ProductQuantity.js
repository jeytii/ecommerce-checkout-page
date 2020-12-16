import { PlusIcon, MinusIcon } from '../icons';

export default ({ baseClass, quantity }) => (
	<div className={`${baseClass}__range`}>
		<button className={`${baseClass}__button fluid`} disabled={quantity < 2}><MinusIcon fill={quantity < 2 ? `#D4D3D3` : `#19202C`} /></button>
		<label className={`fluid`}>{quantity}</label>
		<button className={`${baseClass}__button fluid`}><PlusIcon /></button>
	</div>
)