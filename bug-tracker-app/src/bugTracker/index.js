import React, { Component } from 'react';
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

export default BugTracker;