var SM = (function(){
	var _state = undefined,
		_subscribers = [],
		_reducer = null,
		_init_action = '@INIT_ACTION';


	function getState(){
		return _state;
	}

	function subscribe(callback){
		_subscribers.push(callback);
	}

	function triggerChange(){
		_subscribers.forEach(callback => callback());
	}

	function dispatch(action){
		let result = _reducer(_state, action);
		if (result === _state) return;
		_state = result;
		triggerChange();
	}

	function createStore(reducer){
		_reducer = reducer;
		_state = _reducer(_state, _init_action);
		return { getState, subscribe, dispatch };
	}

	function bindActionCreators(actionCreators, dispatch){
		let result = {};
		for(let key in actionCreators){
			result[key] = function(){
				let action = actionCreators[key].apply(undefined, arguments);
				dispatch(action);
			}
		}
		return result;
	}

	return { createStore, bindActionCreators }
})();