import React, { Component, createRef } from 'react';

class BugEdit extends Component{
	txtNewBugNameRef = createRef();

	onAddNewClick = () => {
		let newBugName = this.txtNewBugNameRef.current.value;
		this.props.addNew(newBugName);
	}

	render(){
		return(
			<section className="edit">
				<label htmlFor="">Bug Name :</label>
				<input type="text" ref={this.txtNewBugNameRef}/>
				<input type="button" value="Add New" onClick={this.onAddNewClick} />
			</section>
		)
	}
}

export default BugEdit;