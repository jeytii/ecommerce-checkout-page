import { ChevronLeftIcon } from '../icons';

const BackButton = () => (
    <button className='list__back-button flex--center fluid'>
        <span>
            <ChevronLeftIcon />
        </span>
        <span className='list__button-label'>Continue Shopping</span>
    </button>
);

export default BackButton;
