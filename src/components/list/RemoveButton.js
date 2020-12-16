import { string } from 'prop-types';
import { CrossIcon } from '../icons';

const RemoveButton = ({ baseClass }) => (
    <button className={`${baseClass}__remove-button`} title='Remove'>
        <CrossIcon />
    </button>
);

RemoveButton.propTypes = {
    baseClass: string.isRequired,
};

export default RemoveButton;
