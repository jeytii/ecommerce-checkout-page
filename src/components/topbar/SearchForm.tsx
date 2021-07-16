import React from 'react';
import Search from '_icons/Search';

export default function SearchForm() {
    return (
        <section className='topbar__search'>
            <form action='' className='topbar__search-form flex--center'>
                <input
                    className='topbar__search-input transparent'
                    type='text'
                    name='query'
                    id='query'
                    placeholder='Search'
                />

                <button type='submit' className='topbar__search-submit'>
                    <Search />
                </button>
            </form>
        </section>
    );
}
