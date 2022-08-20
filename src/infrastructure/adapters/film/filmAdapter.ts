import {Film} from '../../../domain/film/film';
import {FilmApi} from '../../types';
import {EntityApi} from '../../types/api/entityApi';


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
		people: filmApi.people as EntityApi[],
		species: filmApi.species as EntityApi[],
		locations: filmApi.locations as EntityApi[],
		vehicles: filmApi.vehicles as EntityApi[]
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