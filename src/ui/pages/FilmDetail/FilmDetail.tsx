import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getFilmUseCase} from '../../../application/film/getFilmUseCase';
import {Entity} from '../../../domain';
import {Film} from '../../../domain/film/film';
import {Banner} from '../../components/Banner/Banner';
import {EntityList} from '../../components/EntityList/EntityList';
import {FilmDetailGeneralInfo} from '../../components/FilmDetailGeneralInfo/FilmDetailGeneralInfo';
import {Title} from '../../components/Title/Title';
import './FilmDetail.css';

export const FilmDetail = (): JSX.Element => {
	const [isFetching, setIsFetching] = useState(true);
	const [film, setFilm] = useState<Film>();
	const {id} = useParams();
	const hasPeople = film?.people && film?.people?.length > 0;
	const hasSpecies = film?.species && film?.species?.length > 0;
	const hasVehicles = film?.vehicles && film?.vehicles?.length > 0;
	const hasLocations = film?.locations && film?.locations?.length > 0;

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
						<FilmDetailGeneralInfo film={film} />
						<div className="FilmDetail__film__content__additional">
							{hasPeople && (
								<EntityList entityList={film.people as Entity[]} category="people"/>
							)}
							{hasSpecies && (
								<EntityList entityList={film.species as Entity[]} category="species"/>
							)}
							{hasVehicles && (
								<EntityList entityList={film.vehicles as Entity[]} category="vehicles"/>
							)}
							{hasLocations && (
								<EntityList entityList={film.locations as Entity[]} category="locations"/>
							)}
						</div>
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