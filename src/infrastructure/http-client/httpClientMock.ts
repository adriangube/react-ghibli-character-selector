import {GetAttributes, HttpClientDef, PostAttributes} from './types';

const MIN_TIME = 500;
const MAX_TIME = 2000;

const getRandomNumberBetweenTwo = (minNumber: number, maxNumber: number) =>
	Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    
const returnDataInPromise = (data: unknown) => new Promise((resolve) => {
	setTimeout(() => {
		resolve(data);
	}, getRandomNumberBetweenTwo(MIN_TIME, MAX_TIME));
});

class HttpClientMock implements HttpClientDef {
	get(data: GetAttributes): Promise<any> {
		return returnDataInPromise(data.config?.data);
	}
	post(data: PostAttributes): Promise<any> {
		return returnDataInPromise(data.config?.data);
	}
	put(data: PostAttributes): Promise<any> {
		return returnDataInPromise(data.config?.data);
	}
	delete(data: GetAttributes): Promise<any> {
		return returnDataInPromise(data.config?.data);
	}
}

export const httpClientMock = new HttpClientMock();