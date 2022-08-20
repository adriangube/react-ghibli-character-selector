import {Entity} from '../entity/entityType';

export interface Vehicle {
    id: string;
    name: string;
    description: string;
    vehicleClass: string;
    length: string;
    pilot: Entity;
    films?: Entity[];
}