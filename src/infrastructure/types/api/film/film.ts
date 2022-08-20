import {EntityApi} from '../entityApi';

export interface FilmApi {
    id: string;
    title: string;
    original_title: string;
    original_title_romanised: string;
    image: string;
    movie_banner: string;
    description: string;
    director: string;
    producer: string;
    release_date: string;
    running_time: string;
    rt_score: string;
    people?: string[] | EntityApi[];
    species?: string[] | EntityApi[];
    locations?: string[] | EntityApi[];
    vehicles?: string[] | EntityApi[];
    url: string;
}