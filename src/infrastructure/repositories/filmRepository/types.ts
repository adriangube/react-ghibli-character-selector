import {Film} from '../../../domain/film/film';
import {FilmAdapter} from '../../adapters/film/types';
import {HttpClientDef} from '../../http-client/types';

export type FilmRepository = (id: string, adapter: FilmAdapter, httpClient: HttpClientDef) => Promise<Film>;