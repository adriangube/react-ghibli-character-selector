import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Film} from '../../../domain/film/film';
import './FilmItem.css';

export type FilmItemProps = {
    film: Film;
}

export const FilmItem = ({film}: FilmItemProps): JSX.Element => {
	const navigate = useNavigate();
	const onClickHandler = () => {
		navigate(`/films/${film.id}`);
	};

	return (
		<div className="FilmItem" data-testid="FilmItem" onClick={onClickHandler}>
			<img
				src={film.movieBanner}
				alt={`${film.title} banner`}
				className="FilmItem__image"
				data-testid="FilmItem__image"
			/>
			<div className='FilmItem__title'>{film.title}</div>
		</div>
	);
};