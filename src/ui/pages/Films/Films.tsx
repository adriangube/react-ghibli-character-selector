import React, {useEffect, useState} from 'react';
import {getFilmListUseCase} from '../../../application/film/getFilmListUseCase';
import {Film} from '../../../domain/film/film';
import {Fetching} from '../../components/Fetching/Fetching';
import {FilmItem} from '../../components/FilmItem/FilmItem';
import {FilmListSkeleton} from '../../components/FilmListSkeleton/FilmListSkeleton';
import {NoData} from '../../components/NoData/NoData';
import './Films.css';

export const Films = (): JSX.Element => {
	const [isFetching, setIsFetching] = useState(true);
	const [films, setFilms] = useState<Film[]>([]);
	const hasFilms = films?.length > 0;
	
	useEffect(() => {
		setIsFetching(true);
		getFilmListUseCase()
			.then((films) => {
				if (films) {
					setFilms(films);
				}
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				setIsFetching(false);
			});
	}, []);


	return (
		<div className='Films'>
			<div className="Films__content">
				{!isFetching && hasFilms && (
					<div className='Films__films'>
						{films.map((film) => (
							<FilmItem key={film.id} film={film} />
						))}
					</div>
				)}
				<NoData isVisible={!isFetching && !hasFilms} />
				<Fetching isVisible={isFetching}>
					<FilmListSkeleton />
				</Fetching>
			</div>
		</div>
	);
};