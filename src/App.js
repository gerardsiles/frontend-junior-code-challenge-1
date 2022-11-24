import React from 'react';
import './App.css';
import Home from './screens/home-screen';
import GlobalStateProvider from './context/store';

function App() {
	return (
		<GlobalStateProvider>
			<div className='app'>
				<Home />
			</div>
		</GlobalStateProvider>
	);
}

export default App;
