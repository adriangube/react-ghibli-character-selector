import {Entity} from '../entity/entityType';

export interface Specie {
    id: string;
    name: string;
    classification: string;
    eyeColors: string;
    hairColors: string;
    people: Entity[];
    films: Entity[];
}