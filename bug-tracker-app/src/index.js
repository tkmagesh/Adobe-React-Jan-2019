import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';

import appStore from './store';

import Spinner from './spinner';
import BugTracker from './bugTracker';

ReactDOM.render(
		<Provider store={appStore}>
			<div>
				<Spinner/>
				<hr/>
				<BugTracker/>
			</div>
		</Provider>,
		document.getElementById('root'));
