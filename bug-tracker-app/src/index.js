import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { bindActionCreators } from 'redux';

import appStore from './store';
import * as bugActionCreators from './bugTracker/actions';
import spinnerActionCreators from './spinner/actions';
import Spinner from './spinner';
import BugTracker from './bugTracker';

let spinnerActions = bindActionCreators(spinnerActionCreators, appStore.dispatch);
let bugActions = bindActionCreators(bugActionCreators, appStore.dispatch);
function renderApp(){
	let storeState = appStore.getState(),
		bugs = storeState.bugsData,
		value = storeState.spinnerData;

	ReactDOM.render(
		<div>
			<Spinner value={value} {...spinnerActions} />
			<hr/>
			<BugTracker bugs={bugs} {...bugActions} />
		</div>,
		document.getElementById('root'));
}
renderApp();
appStore.subscribe(renderApp);