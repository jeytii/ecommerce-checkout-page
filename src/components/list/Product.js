import ProductInfo from './ProductInfo';
import ProductSize from './ProductSize';
import ProductQuantity from './ProductQuantity';
import ProductPrice from './ProductPrice';
import RemoveButton from './RemoveButton';

export default ({ image, name, color, size, quantity, price }) => (
	<tr className='list__row'>
		<td>
			<ProductInfo baseClass='list' {...{ image, name, color }} />
		</td>
		<td>
			<ProductSize baseClass='list' {...{ size }} />
		</td>
		<td>
			<ProductQuantity baseClass='list' {...{ quantity }} />
		</td>
		<td>
			<ProductPrice baseClass='list' {...{ price }} />
		</td>
		<td>
			<RemoveButton baseClass='list' />
		</td>
	</tr>
)