import React, { useState, MouseEvent } from 'react';
import { useMediaQuery } from 'react-responsive';
import TopBar from './topbar';
import Body from './body';
import Tabs from './body/Tabs';
import List from './list';
import Form from './form';

export default function App() {
    const mobile = useMediaQuery({ maxWidth: 500 });
    const narrowScreen = useMediaQuery({ maxWidth: 965 });
    const [activeComponent, setActiveComponent] = useState<'list' | 'form'>(
        'list'
    );

    const components = {
        list: <List mobileMode={mobile} />,
        form: <Form />,
    };

    function toggleComponent(
        component: 'list' | 'form',
        e: MouseEvent<HTMLButtonElement>
    ) {
        const buttons = e.currentTarget.parentElement?.children;

        if (buttons) {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove('active');
            }
        }

        e.currentTarget.classList.add('active');

        setActiveComponent(component);
    }

    return (
        <section className='wrapper'>
            <TopBar mobileMode={mobile} />

            {narrowScreen && (
                <Tabs
                    component={activeComponent}
                    toggleComponent={toggleComponent}
                />
            )}

            <Body>
                {narrowScreen ? (
                    components[activeComponent]
                ) : (
                    <>
                        <List mobileMode={mobile} />
                        <Form />
                    </>
                )}
            </Body>
        </section>
    );
}
