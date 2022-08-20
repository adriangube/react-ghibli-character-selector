import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getFilmUseCase} from '../../../application/film/getFilmUseCase';
import {Film} from '../../../domain/film/film';
import {Banner} from '../../components/Banner/Banner';
import {Title} from '../../components/Title/Title';
import './FilmDetail.css';

export const FilmDetail = (): JSX.Element => {
	const [isFetching, setIsFetching] = useState(true);
	const [film, setFilm] = useState<Film>();
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			setIsFetching(true);
			getFilmUseCase(id)
				.then((film) => {
					if (film) {
						setFilm(film);
					}
				})
				.catch((error) => {
					console.error(error);
				})
				.finally(() => {
					setIsFetching(false);
				});
		}
	}, [id]);

	return (
		<div className="FilmDetail">
			{!isFetching && film && (
				<div className='FilmDetail__film'>
					<div className="FilmDetail__film__header">
						<Banner imageUrl={film.movieBanner} />
						<Title title={film.title} />
					</div>
					<div className="FilmDetail__film__content">
						
					</div>
				</div>
			)}
			{!isFetching && !film && (
				<div className="FilmDetail__no-data">
					No data
				</div>
			)}
			{isFetching && (
				<div className='FilmDetail__fetching'>Fetching</div>
			)}
		</div>
	);
};