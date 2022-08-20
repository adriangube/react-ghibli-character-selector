import React from 'react';
import {Film} from '../../../domain/film/film';
import './FilmDetailGeneralInfo.css';

export type FilmDetailGeneralInfoProps = {
    film: Film;
}

export const FilmDetailGeneralInfo = ({film}:FilmDetailGeneralInfoProps ): JSX.Element => {
	return (
		<div className="FilmDetailGeneralInfo">
			<div className="FilmDetailGeneralInfo__content">
				<section className='FilmDetailGeneralInfo__sinopsis'>
					<h2>Sinopsis</h2>
					<p>{film.description}</p>
				</section>
				<section className='FilmDetailGeneralInfo__general-info'>
					<h2>Information</h2>
					<p>
						<span className='label'>Director: </span>
						<span className='value'>{film.director}</span>
					</p>
					<p>
						<span className='label'>Producer: </span>
						<span className='value'>{film.producer}</span>
					</p>
					<p>
						<span className='label'>Release Date: </span>
						<span className='value'>{film.releaseDate}</span>
					</p>
					<p>
						<span className='label'>Duration: </span>
						<span className='value'>{film.runningTime}min.</span>
					</p>
					<p>
						<span className='label'>Score: </span>
						<span className='value'>{film.score}</span>
					</p>
				</section>
			</div>
		</div>
	);
};