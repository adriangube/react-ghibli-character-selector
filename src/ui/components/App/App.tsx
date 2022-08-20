import React from 'react';
import {Router} from '../../pages/Router';
import {Header} from '../Header/Header';
import './App.css';

export const App = () => {
	return (
		<div className="App">
			<Header />
			<Router />
		</div>
	);
};
