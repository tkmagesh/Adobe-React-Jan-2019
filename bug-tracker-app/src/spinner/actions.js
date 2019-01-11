let spinnerActionCreators = {
	up(){
		let action = { type : 'UP'};
		return action;
	},
	down(){
		let action = { type : 'DOWN'};
		return action;
	},
	doubleUp(){
		let action = { type : 'DOUBLE_UP'};
		return action;
	}
}
export default spinnerActionCreators;