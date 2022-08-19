import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';
import {Detail} from './Detail/Detail';
import {Home} from './Home/Home';

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="movies/:id" element={<Detail/>} />
				<Route path="movies" element={<Home />} />
				<Route path="/" element={<Home/>} />
			</Routes>
		</BrowserRouter>
	);
};