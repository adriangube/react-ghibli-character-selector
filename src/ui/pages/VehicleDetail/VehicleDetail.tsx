import React from 'react';
import {useParams} from 'react-router-dom';
import {getVehicleUseCase} from '../../../application/vehicle/getVehicleUseCase';
import {Entity, hasEntities, Vehicle} from '../../../domain';
import {DetailPageHeader} from '../../components/DetailPageHeader/DetailPageHeader';
import {EntityList} from '../../components/EntityList/EntityList';
import {Fetching} from '../../components/Fetching/Fetching';
import {NoData} from '../../components/NoData/NoData';
import {VehicleGeneralInfo} from '../../components/VehicleGeneralInfo/VehicleGeneralInfo';
import {useFetch} from '../../hooks/useFetch';
import '../../theme/detail-pages.css';
import { DetailPageSkeleton } from '../../components/DetailPageSkeleton/DetailPageSkeleton';


export const VehicleDetail = (): JSX.Element => {
	const {id} = useParams();
	const {isFetching, data: vehicle} = useFetch<Vehicle>(getVehicleUseCase, [id]);
	const hasFilms = hasEntities(vehicle?.films); 

	return (
		<div className="VehicleDetail detail-page">
			{!isFetching && vehicle && (
				<div className="detail-page__wrapper">
					<DetailPageHeader title={vehicle.name} />
					<div className="detail-page__content">
						<VehicleGeneralInfo vehicle={vehicle} />
						<div className="detail-page__additional-content">
							{hasFilms && (
								<EntityList entityList={vehicle.films as Entity[]} category="films"/>
							)}
						</div>
					</div>
				</div>
			)}
			<NoData isVisible={!isFetching && !vehicle} />
			<Fetching isVisible={isFetching}>
				<DetailPageSkeleton />
			</Fetching>
		</div>
	);
};

export default VehicleDetail;