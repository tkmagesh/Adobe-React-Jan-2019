import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as bugActionCreators from './actions';

import BugStats from './views/bugStats';
import BugSort from './views/bugSort';
import BugEdit from './views/bugEdit';
import BugList from './views/bugList';

class BugTracker extends Component{
	render(){
		let { bugs, toggle, removeClosed, addNew, sort } = this.props;
		return(
			<div>
				<BugStats bugs={bugs} />
				<BugSort {...{bugs, sort}}/>
				<BugEdit addNew={addNew} />
				<BugList {...{bugs, toggle, removeClosed}} />
			</div>
		)
	}
}
function mapStateToProps(storeState){
	let bugs = storeState.bugsData;
	return { bugs : bugs };
}

function mapDispatchToProps(dispatch){
	let bugActions = bindActionCreators(bugActionCreators, dispatch);
	return bugActions;
}

export default connect(mapStateToProps, mapDispatchToProps)(BugTracker);


