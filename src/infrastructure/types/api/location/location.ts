import {EntityApi} from '../entityApi';

export interface LocationApi {
    id: string;
    name: string;
    climate: string;
    terrain: string;
    surface_water: string;
    residents: string[] | EntityApi[];
    films: string[] | EntityApi[];
}