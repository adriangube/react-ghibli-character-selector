import React from 'react';
import {Film} from '../../../domain/film/film';
import './FilmItem.css';

export type FilmItemProps = {
    film: Film;
}

export const FilmItem = ({ film }:FilmItemProps ): JSX.Element => {
	return (
		<div className="FilmItem" data-testid="FilmItem">
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