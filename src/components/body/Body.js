import { element } from 'prop-types';

const Body = ({ children }) => (
    <section className='body flex--stretch'>{children}</section>
);

Body.propTypes = {
    children: element,
};

export default Body;
