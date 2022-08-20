import {Entity} from '../entity/entityType';

export interface Location {
    id: string;
    name: string;
    climate: string;
    terrain: string;
    surfaceWater: string;
    residents?: Entity[];
    films?: Entity[];
}