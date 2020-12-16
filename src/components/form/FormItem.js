import { string, element } from 'prop-types';

const FormItem = ({ className, title, children }) => (
    <div className={className}>
        <label className='form__label fluid'>{title}:</label>
        {children}
    </div>
);

FormItem.propTypes = {
    className: string.isRequired,
    title: string.isRequired,
    children: element.isRequired,
};

export default FormItem;
