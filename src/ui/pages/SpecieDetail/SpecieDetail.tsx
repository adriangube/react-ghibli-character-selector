import React from 'react';
import {useParams} from 'react-router-dom';
import {getSpecieUseCase} from '../../../application/specie/getSpecieUseCase';
import {Entity, hasEntities, Specie} from '../../../domain';
import {DetailPageHeader} from '../../components/DetailPageHeader/DetailPageHeader';
import {EntityList} from '../../components/EntityList/EntityList';
import {Fetching} from '../../components/Fetching/Fetching';
import {NoData} from '../../components/NoData/NoData';
import {SpecieGeneralInfo} from '../../components/SpecieGeneralInfo/SpecieGeneralInfo';
import {useFetch} from '../../hooks/useFetch';
import '../../theme/detail-pages.css';
import { DetailPageSkeleton } from '../../components/DetailPageSkeleton/DetailPageSkeleton';

export const SpecieDetail = (): JSX.Element => {
	const {id} = useParams();
	const {isFetching, data: specie} = useFetch<Specie>(getSpecieUseCase, [id]);
	const hasPeople = hasEntities(specie?.people);
	const hasFilms = hasEntities(specie?.films);

	return (
		<div className="SpecieDetail detail-page">
			{!isFetching && specie && (
				<div className='detail-page__wrapper'>
					<DetailPageHeader title={specie.name} />
					<div className="detail-page__content">
						<SpecieGeneralInfo specie={specie}/>
						<div className="detail-page__additional-content">
							{hasPeople && (
								<EntityList entityList={specie.people as Entity[]} category="people"/>
							)}
							{hasFilms && (
								<EntityList entityList={specie.films as Entity[]} category="films"/>
							)}
						</div>
					</div>
				</div>
			)}
			<NoData isVisible={!isFetching && !specie} />
			<Fetching isVisible={isFetching}>
				<DetailPageSkeleton />
			</Fetching>	
		</div>
	);
};