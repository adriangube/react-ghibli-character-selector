import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';
import {DetailPageSkeleton} from '../components/DetailPageSkeleton/DetailPageSkeleton';
import {FilmListSkeleton} from '../components/FilmListSkeleton/FilmListSkeleton';

const FilmDetail = React.lazy(() => import('./FilmDetail/FilmDetail'));
const Films = React.lazy(() => import('./Films/Films'));
const LocationDetail = React.lazy(() => import('./LocationDetail/LocationDetail'));
const PeopleDetail = React.lazy(() => import('./PeopleDetail/PeopleDetail'));
const SpecieDetail = React.lazy(() => import('./SpecieDetail/SpecieDetail'));
const VehicleDetail = React.lazy(() => import('./VehicleDetail/VehicleDetail'));

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="films/:id" element={(
					<React.Suspense fallback={<DetailPageSkeleton/>}>
						<FilmDetail/>
					</React.Suspense>
				)} />
				<Route path="films" element={(
					<React.Suspense fallback={<FilmListSkeleton/>}>
						<Films />
					</React.Suspense>
				)} />
				<Route path="locations/:id" element={(
					<React.Suspense fallback={<DetailPageSkeleton/>}>
						<LocationDetail />
					</React.Suspense>
				)} />
				<Route path="people/:id" element={(
					<React.Suspense fallback={<DetailPageSkeleton/>}>
						<PeopleDetail />
					</React.Suspense>
				)} />
				<Route path="species/:id" element={(
					<React.Suspense fallback={<DetailPageSkeleton/>}>
						<SpecieDetail />
					</React.Suspense>
				)} />
				<Route path="vehicles/:id" element={(
					<React.Suspense fallback={<DetailPageSkeleton/>}>
						<VehicleDetail/>
					</React.Suspense>
				)}/>
				<Route />
				<Route path="/" element={(
					<React.Suspense fallback={<FilmListSkeleton/>}>
						<Films/>
					</React.Suspense>
				)} />
			</Routes>
		</BrowserRouter>
	);
};