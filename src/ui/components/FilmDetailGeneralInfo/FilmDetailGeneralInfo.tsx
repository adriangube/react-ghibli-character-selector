import React from 'react';
import {Film} from '../../../domain/film/film';
import '../../theme/general-info.css';

export type FilmDetailGeneralInfoProps = {
    film: Film;
}

export const FilmDetailGeneralInfo = ({film}:FilmDetailGeneralInfoProps ): JSX.Element => {
	return (
		<div className="FilmDetailGeneralInfo general-info">
			<section className='large-font-size'>
				<h2>Sinopsis</h2>
				<p>{film.description}</p>
			</section>
			<section>
				<h2>Information</h2>
				<p>
					<span className='label'>Director: </span>
					<span>{film.director}</span>
				</p>
				<p>
					<span className='label'>Producer: </span>
					<span>{film.producer}</span>
				</p>
				<p>
					<span className='label'>Release Date: </span>
					<span>{film.releaseDate}</span>
				</p>
				<p>
					<span className='label'>Duration: </span>
					<span>{film.runningTime}min.</span>
				</p>
				<p>
					<span className='label'>Score: </span>
					<span>{film.score}</span>
				</p>
			</section>
		</div>
	);
};