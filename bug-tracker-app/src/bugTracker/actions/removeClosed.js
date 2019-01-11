import bugApi from '../services/bugApi';
export function removeClosed(bugs){
	return function(dispatch, getState){
		let bugs = getState().bugsData;
		let closedBugs = bugs.filter(bug => bug.isClosed);
		closedBugs
			.forEach(closedBugData => {
				bugApi
					.remove(closedBugData)
					.then(() => {
						let action = { type : 'REMOVE', payload : closedBugData};
						dispatch(action);
					});
			});
	}
}