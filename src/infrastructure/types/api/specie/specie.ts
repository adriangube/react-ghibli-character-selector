import {EntityApi} from '../entityApi';

export interface SpecieApi {
    id: string;
    name: string;
    classification: string;
    eye_colors: string;
    hair_colors: string;
    people: string[] | EntityApi[];
    films: string[] | EntityApi[];
}