import {EntityApi} from '../entityApi';

export interface VehicleApi {
    id: string;
    name: string;
    description: string;
    vehicle_class: string;
    length: string;
    pilot: string | EntityApi;
    films: string[] | EntityApi[];
}