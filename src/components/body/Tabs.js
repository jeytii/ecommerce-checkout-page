import List from '../list/List';
import Form from '../form/Form';

export default ({ component, toggleComponent }) => (
	<div className='tabs flex--stretch'>
		<button
			className={`tab flex--1 ${component === List ? 'active' : ''}`}
			onClick={toggleComponent.bind(this, List)}>
			Shopping Cart
		</button>
		
		<button
			className={`tab flex--1 ${component === Form ? 'active' : ''}`}
			onClick={toggleComponent.bind(this, Form)}>
			Payment
		</button>
	</div>
)