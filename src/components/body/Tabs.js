import { elementType, func } from 'prop-types';
import List from '../list/List';
import Form from '../form/Form';

const Tabs = ({ component, toggleComponent }) => (
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
);

Tabs.propTypes = {
    component: elementType.isRequired,
    toggleComponent: func.isRequired,
};

export default Tabs;
