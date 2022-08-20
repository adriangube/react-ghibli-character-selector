import {Film} from '../../../domain/film/film';
import {FilmApi} from '../../types';


export const filmAdapter = (filmApi: FilmApi): Film => {
	return {
		id: filmApi.id,
		title: filmApi.title,
		originalTitle: filmApi.original_title,
		originalTitleRomanized: filmApi.original_title_romanised,
		image: filmApi.image,
		movieBanner: filmApi.movie_banner,
		description: filmApi.description,
		director: filmApi.director,
		producer: filmApi.producer,
		releaseDate: filmApi.release_date,
		runningTime: filmApi.running_time,
		score: filmApi.rt_score,
		people: filmApi.people,
		locations: filmApi.locations,
		vehicles: filmApi.vehicles
	};
};

export const filmListItemAdapter = (filmApi: FilmApi): Film => {
	return {
		id: filmApi.id,
		title: filmApi.title,
		originalTitle: filmApi.original_title,
		originalTitleRomanized: filmApi.original_title_romanised,
		image: filmApi.image,
		movieBanner: filmApi.movie_banner,
		description: filmApi.description,
		director: filmApi.director,
		producer: filmApi.producer,
		releaseDate: filmApi.release_date,
		runningTime: filmApi.running_time,
		score: filmApi.rt_score
	};
};

export const filmListAdapter = (filmListApi: FilmApi[]): Film[] => {
	return filmListApi.map((film) => filmListItemAdapter(film));
};