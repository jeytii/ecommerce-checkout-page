import { useState, useEffect } from 'react';
import TopBar from './topbar/TopBar';
import Body from './body/Body';
import Tabs from './body/Tabs';
import List from './list/List';
import Form from './form/Form';

const App = () => {
    const [mobileMode, setMobileMode] = useState(false);
    const [narrowScreen, setNarrowScreen] = useState(false);
    const [component, setComponent] = useState({ default: List });
    const { default: ActiveComponent } = component;

    function toggleMobileMode() {
        setMobileMode(window.innerWidth <= 500);
        setNarrowScreen(window.innerWidth <= 965);
    }

    function toggleComponent(component, e) {
        const buttons = e.target.parentElement.children;

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('active');
        }

        e.target.classList.add('active');

        setComponent({ default: component });
    }

    useEffect(() => {
        window.addEventListener('resize', toggleMobileMode);
    }, []);

    return (
        <section className='wrapper'>
            <TopBar {...{ mobileMode }} />

            {narrowScreen || window.innerWidth <= 965 ? (
                <Tabs
                    component={ActiveComponent}
                    toggleComponent={toggleComponent}
                />
            ) : null}

            <Body>
                {!narrowScreen && window.innerWidth >= 965 ? (
                    <>
                        <List {...{ mobileMode }} />
                        <Form />
                    </>
                ) : (
                    <ActiveComponent />
                )}
            </Body>
        </section>
    );
};

export default App;
