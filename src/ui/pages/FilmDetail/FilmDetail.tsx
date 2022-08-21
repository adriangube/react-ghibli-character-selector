import React from 'react';
import {useParams} from 'react-router-dom';
import {getFilmUseCase} from '../../../application/film/getFilmUseCase';
import {Entity, hasEntities} from '../../../domain';
import {Film} from '../../../domain/film/film';
import {DetailPageHeader} from '../../components/DetailPageHeader/DetailPageHeader';
import {DetailPageSkeleton} from '../../components/DetailPageSkeleton/DetailPageSkeleton';
import {EntityList} from '../../components/EntityList/EntityList';
import {Fetching} from '../../components/Fetching/Fetching';
import {FilmDetailGeneralInfo} from '../../components/FilmDetailGeneralInfo/FilmDetailGeneralInfo';
import {NoData} from '../../components/NoData/NoData';
import {useFetch} from '../../hooks/useFetch';
import '../../theme/detail-pages.css';

export const FilmDetail = (): JSX.Element => {
	const {id} = useParams();
	const {isFetching, data: film} = useFetch<Film>(getFilmUseCase, [id]);

	const hasPeople = hasEntities(film?.people);
	const hasSpecies = hasEntities(film?.species);
	const hasVehicles = hasEntities(film?.vehicles);
	const hasLocations = hasEntities(film?.locations);

	return (
		<div className="FilmDetail detail-page">
			{!isFetching && film && (
				<div className='detail-page__wrapper'>
					<DetailPageHeader imageUrl={film.movieBanner} title={film.title} />
					<div className="detail-page__content">
						<FilmDetailGeneralInfo film={film} />
						<div className="detail-page__additional-content">
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
			<NoData isVisible={!isFetching && !film} />
			<Fetching isVisible={isFetching}>
				<DetailPageSkeleton />
			</Fetching>
		</div>
	);
};

export default FilmDetail;