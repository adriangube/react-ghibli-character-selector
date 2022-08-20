import {EntityApi} from '../entityApi';

export interface PeopleApi {
    id: string;
    name: string;
    gender: string;
    age?: string;
    eye_color: string;
    hair_color: string;
    films: string[] | EntityApi[];
    species: string | EntityApi;
}