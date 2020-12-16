import FormItem from './FormItem';
import { CreditCardIcon, PaypalIcon } from '../icons';

const Form = () => (
    <section className='form color--white'>
        <h1 className='form__heading heading'>Payment Info.</h1>

        <form className='form__form' action=''>
            <FormItem title='Payment Method' className='form__item'>
                <div className='form__buttons-container flex--stretch'>
                    <button className='form__button flex--center'>
                        <span>
                            <CreditCardIcon />
                        </span>
                        <span className='form__button-label'>Credit Card</span>
                    </button>

                    <button className='form__button ml--auto'>
                        <PaypalIcon />
                    </button>
                </div>
            </FormItem>

            <FormItem title='Name On Card' className='form__item'>
                <input
                    className='form__input transparent color--white'
                    type='text'
                />
            </FormItem>

            <FormItem title='Card Number' className='form__item'>
                <input
                    className='form__input transparent color--white'
                    type='text'
                />
            </FormItem>

            <div className='form__item flex--center'>
                <FormItem title='Expiration Date' className='flex--1'>
                    <div className='form__select-container flex--center'>
                        <select
                            className='form__select transparent color--white'
                            name='month'>
                            <option value=''>MM</option>
                        </select>
                        <select
                            className='form__select transparent color--white'
                            name='year'>
                            <option value=''>YYYY</option>
                        </select>
                    </div>
                </FormItem>

                <FormItem title='CVV' className='form__cvv'>
                    <input
                        className='form__input transparent color--white'
                        type='text'
                        placeholder='XXX'
                    />
                </FormItem>
            </div>

            <div className='form__item'>
                <input
                    className='form__submit transparent color--white bold'
                    type='submit'
                    value='Check Out.'
                />
            </div>
        </form>
    </section>
);

export default Form;
