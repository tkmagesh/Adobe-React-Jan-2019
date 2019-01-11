import React, { Component } from 'react';

class BugSort extends Component{
	selectSortAttrRef = React.createRef();
	chkDescRef = React.createRef();

	render= () => {
		let {bugs, sort} = this.props;
		return (
			<section className="sort">
				<label htmlFor="">Order By :</label>
				<select ref={this.selectSortAttrRef} onChange={(evt) => sort(bugs, this.selectSortAttrRef.current.value, this.chkDescRef.current.checked)}>
					<option value="name">Name</option>
					<option value="isClosed">Status</option>
				</select>
				<label htmlFor="">Descending ? :</label>
				<input ref={this.chkDescRef} type="checkbox" onChange={(evt) => sort(bugs, this.selectSortAttrRef.current.value, this.chkDescRef.current.checked)}/>
			</section>
		);
	}
}

export default BugSort;