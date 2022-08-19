import {Film} from '../../../domain/film/film';
import {FilmApi} from '../../types';

const PEOPLE_BASE_URL = 'https://ghibliapi.herokuapp.com/people/';
const SPECIES_BASE_URL = 'https://ghibliapi.herokuapp.com/species/';
const LOCATIONS_BASE_URL = 'https://ghibliapi.herokuapp.com/locations/';
const VEHICLES_BASE_URL = 'https://ghibliapi.herokuapp.com/vehicles/';


const categoriesAdapter = (categoryList: string[], categoryBaseURL: string): string[] | undefined => {
	const result = categoryList.filter((categoryURL) => categoryURL !== categoryBaseURL);
	return result?.length > 0 ? result : undefined;
};


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
		people: categoriesAdapter(filmApi.people, PEOPLE_BASE_URL),
		species: categoriesAdapter(filmApi.species, SPECIES_BASE_URL),
		locations: categoriesAdapter(filmApi.locations, LOCATIONS_BASE_URL),
		vehicles: categoriesAdapter(filmApi.vehicles, VEHICLES_BASE_URL)
	};
};

export const filmListAdapter = (filmListApi: FilmApi[]): Film[] => {
	return filmListApi.map((film) => filmAdapter(film));
};