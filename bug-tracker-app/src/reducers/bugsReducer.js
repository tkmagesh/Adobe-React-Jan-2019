let dummyBugs = [
	{name : 'Server communication failure', isClosed : false},
	{name : 'User actions not recognized', isClosed : true}
];

function bugsReducer(currentState = dummyBugs, action){
	if (action.type === 'ADD_NEW'){
		let newBug = action.payload;
		let newState = [...currentState, newBug];
		return newState;
	}
	if (action.type === 'REPLACE'){
		let { oldBug, newBug } = action.payload;
		let newState = currentState.map(bug => bug === oldBug ? newBug : bug);
		return newState;
	}
	if (action.type === 'REMOVE'){
		let bugsToRemove = action.payload;
		let newState = currentState.filter(bug => bugsToRemove.indexOf(bug) === -1);
		return newState;
	}
	if (action.type === 'RESET'){
		return [...action.payload];
	}
	return currentState;

}

export default bugsReducer;