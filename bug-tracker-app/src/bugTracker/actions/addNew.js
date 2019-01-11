import bugApi from '../services/bugApi';

export function addNew(newBugName){
	return function(dispatch){
		let newBugData = { id : 0, name : newBugName, isClosed : false, createdAt : new Date()};
		bugApi
			.save(newBugData)
			.then(newBug => {
				let action = { type : 'ADD_NEW', payload : newBug};
				dispatch(action);
			});
	}
}