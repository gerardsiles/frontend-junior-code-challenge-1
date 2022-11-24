import React from 'react';

const initialState = {
	id: 1,
};

const GlobalStateContext = React.createContext(initialState);
const DispatchStateContext = React.createContext(undefined);

const GlobalStateProvider = ({ children }) => {
	const [state, dispatch] = React.useReducer(
		(state, newValue) => ({ ...state, ...newValue }),
		initialState
	);

	return (
		<GlobalStateContext.Provider value={initialState}>
			<DispatchStateContext.Provider value={dispatch}>
				{children}
			</DispatchStateContext.Provider>
		</GlobalStateContext.Provider>
	);
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'parse-data':
			return {
				...state,
				data: action.payload,
			};

		default:
			return state;
	}
};

export const useGlobalState = () => [
	React.useContext(GlobalStateContext),
	React.useContext(DispatchStateContext),
];

export default GlobalStateProvider;
