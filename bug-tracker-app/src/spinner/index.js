import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import spinnerActionCreators from './actions';

let Spinner = ({ value, up, down, doubleUp }) => (
	<section>
		<input type="button" value="DOWN" onClick={down}/>
		<span> [ {value} ] </span>
		<input type="button" value="UP" onClick={up}/>
		<input type="button" value="double Up" onClick={doubleUp}/>
	</section>
);

function mapStateToProps(storeState){
	let value = storeState.spinnerData;
	return { value : value };
}

function mapDispatchToProps(dispatch){
	let spinnerActions = bindActionCreators(spinnerActionCreators, dispatch);
	return spinnerActions;
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Spinner);