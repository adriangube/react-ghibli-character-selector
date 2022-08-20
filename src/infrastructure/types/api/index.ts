export * from './film/film';

export interface ApiResponse<T> {
    status: number;
    data: T;
}

