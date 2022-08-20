import {Entity} from '../entity/entityType';

export interface Film {
    id: string;
    title: string;
    originalTitle: string;
    originalTitleRomanized: string;
    image: string;
    movieBanner: string;
    description: string;
    director: string;
    producer: string;
    releaseDate: string;
    runningTime: string;
    score: string;
    people?: any[];
    locations?: any[];
    vehicles?: any[];
}