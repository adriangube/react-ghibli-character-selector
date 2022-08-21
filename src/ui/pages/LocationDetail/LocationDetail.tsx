import React from 'react';
import {useParams} from 'react-router-dom';
import {getLocationUseCase} from '../../../application/location/getLocationUseCase';
import {Entity, hasEntities, Location} from '../../../domain';
import {DetailPageHeader} from '../../components/DetailPageHeader/DetailPageHeader';
import {EntityList} from '../../components/EntityList/EntityList';
import {Fetching} from '../../components/Fetching/Fetching';
import {LocationGeneralInfo} from '../../components/LocationGeneralInfo/LocationGeneralInfo';
import {NoData} from '../../components/NoData/NoData';
import {useFetch} from '../../hooks/useFetch';
import '../../theme/detail-pages.css';

export const LocationDetail = (): JSX.Element => {

	const {id} = useParams();
	const {isFetching, data: location} = useFetch<Location>(getLocationUseCase, [id]);
	const hasResidents = hasEntities(location?.residents);
	const hasFilms = hasEntities(location?.films);


	return (
		<div className="LocationDetail detail-page">
			{!isFetching && location && (
				<div className='detail-page__wrapper'>
					<DetailPageHeader title={location.name} />
					<div className="detail-page__content">
						<div className="detail-page__additional-content">
							<LocationGeneralInfo location={location} />
							{hasResidents && (
								<EntityList entityList={location.residents as Entity[]} category="people"/>
							)}
							{hasFilms && (
								<EntityList entityList={location.films as Entity[]} category="films"/>
							)}
						</div>
					</div>
				</div>
			)}
			<NoData isVisible={!isFetching && !location} />
			<Fetching isVisible={isFetching} />
		</div>
	);
};