import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';
import {FilmDetail} from './FilmDetail/FilmDetail';
import {Films} from './Films/Films';
import {LocationDetail} from './LocationDetail/LocationDetail';
import {PeopleDetail} from './PeopleDetail/PeopleDetail';
import {SpecieDetail} from './SpecieDetail/SpecieDetail';
import {VehicleDetail} from './VehicleDetail/VehicleDetail';


export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="films/:id" element={<FilmDetail/>} />
				<Route path="films" element={<Films />} />
				<Route path="locations/:id" element={<LocationDetail />} />
				<Route path="people/:id" element={<PeopleDetail />} />
				<Route path="species/:id" element={<SpecieDetail />} />
				<Route path="vehicles/:id" element={<VehicleDetail/>}/>
				<Route />
				<Route path="/" element={<Films/>} />
			</Routes>
		</BrowserRouter>
	);
};