import { ListContext } from './List';
import ProductInfo from './ProductInfo';
import ProductSize from './ProductSize';
import ProductQuantity from './ProductQuantity';
import ProductPrice from './ProductPrice';
import RemoveButton from './RemoveButton';

export default () => (
	<section className='mobile-list'>
		<ListContext.Consumer>
			{({ items }) => (
				items.map(({ key, image, name, color, size, quantity, price }) => (
					<div key={key} className='mobile-list__product flex--center'>
						<ProductInfo {...{ image, name, color }} baseClass='mobile-list' />
						<div className='mobile-list__numbers flex--1'>
							<ProductSize {...{ size }} baseClass='mobile-list' />
							<ProductQuantity {...{ quantity }} baseClass='mobile-list' />
							<ProductPrice {...{ price }} />
						</div>
						<RemoveButton baseClass='mobile-list' />
					</div>
				))
			)}
		</ListContext.Consumer>
	</section>
)