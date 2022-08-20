import {Entity} from '../entity/entityType';

export interface People {
    id: string;
    name: string;
    gender: string;
    age?: string;
    eyeColor: string;
    hairColor: string;
    films: Entity[];
    species: Entity;
}