import {useEffect, useState} from 'react';
import {UseCase} from '../../application/types';


export function useFetch<T>(useCase: UseCase<T>, ...params: any[]): {isFetching: boolean, data?: T, error?: string} {
	const [isFetching, setIsFetching] = useState(true);
	const [data, setData] = useState<T>();
	const [error, setError] = useState();
    
	useEffect(() => {
		setIsFetching(true);
		useCase(...params)
			.then((result) => {
				if (result) {
					setData(result);
				}
			})
			.catch((error) => {
				console.error(error);
				setError(error);
			})
			.finally(() => {
				setIsFetching(false);
			});
	}, ...params);
	return {isFetching, data, error};
}