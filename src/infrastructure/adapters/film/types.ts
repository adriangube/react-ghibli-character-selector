import {Film} from '../../../domain/film/film';
import {FilmApi} from '../../types';

export type FilmAdapter = (filmApi: FilmApi) => Film;
export type FilmListAdapter = (filmListApi: FilmApi[]) =>  Film[]