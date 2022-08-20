import React, {useEffect, useState} from 'react';
import {getFilmListUseCase} from '../../../application/film/getFilmListUseCase';
import {Film} from '../../../domain/film/film';
import {FilmItem} from '../../components/FilmItem/FilmItem';
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
				{!isFetching && !hasFilms && (
					<div className='Films__no-data'>No data</div>
				)}
				{isFetching && (
					<div className='Film__is-fetching'>Fetching</div>
				)}
			</div>
		</div>
	);
};