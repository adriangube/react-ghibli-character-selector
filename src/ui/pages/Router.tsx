import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';
import {FilmDetail} from './FilmDetail/FilmDetail';
import {Films} from './Films/Films';

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="films/:id" element={<FilmDetail/>} />
				<Route path="films" element={<Films />} />
				<Route path="/" element={<Films/>} />
			</Routes>
		</BrowserRouter>
	);
};