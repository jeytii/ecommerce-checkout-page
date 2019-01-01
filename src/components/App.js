import React, { Component, Fragment } from 'react';
import TopBar from './topbar/TopBar';
import Body from './body/Body';
import Tabs from './body/Tabs';
import List from './list/List';
import Form from './form/Form';

export default class App extends Component {
	state = {
		mobileMode: false,
		narrowScreen: false,
		component: List
	}

	componentDidMount() {
		window.addEventListener('resize', this.toggleMobileMode)
	}

	toggleMobileMode = () => {
		this.setState(() => ({
			mobileMode: window.innerWidth <= 500 ? true : false,
			narrowScreen: window.innerWidth <= 965 ? true : false
		}))
	}

	toggleComponent = (component, e) => {
		const et = e.target;
		const buttons = et.parentElement.children;

		for(let i = 0; i < buttons.length; i++) {
			buttons[i].classList.remove('active');
		}

		et.classList.add('active');

		this.setState(() => ({ component }))
	}

	render() {
		const { mobileMode, narrowScreen, component: ActiveComponent } = this.state;

		return(
			<section className='wrapper'>
				
				<TopBar {...{ mobileMode }} />
				
				{
					(narrowScreen || window.innerWidth <= 965)
					? (<Tabs component={ActiveComponent} toggleComponent={this.toggleComponent} />)
					: null
				}
				
				<Body>
					{
						(!narrowScreen && window.innerWidth >= 965)
						? (
							<Fragment>
								<List {...{ mobileMode }} />
								<Form />
							</Fragment>
						)
						: <ActiveComponent />
					}
				</Body>
			
			</section>
		)
	}
}