import React from 'react';
import {useParams} from 'react-router-dom';
import {getPeopleUseCaseL} from '../../../application/people/getPeopleUseCase';
import {Entity, hasEntities, People} from '../../../domain';
import {DetailPageHeader} from '../../components/DetailPageHeader/DetailPageHeader';
import {EntityList} from '../../components/EntityList/EntityList';
import {Fetching} from '../../components/Fetching/Fetching';
import {NoData} from '../../components/NoData/NoData';
import {PeopleGeneralInfo} from '../../components/PeopleGeneralInfo/PeopleGeneralInfo';
import {useFetch} from '../../hooks/useFetch';
import '../../theme/detail-pages.css';

export const PeopleDetail = (): JSX.Element => {
	const {id} = useParams();
	const {isFetching, data: people} = useFetch<People>(getPeopleUseCaseL, [id]);
	const hasFilms = hasEntities(people?.films);

	return (
		<div className="PeopleDetail detail-page">
			{!isFetching && people && (
				<div className="detail-page__wrapper">
					<DetailPageHeader title={people.name} />
					<div className="detail-page__content">
						<PeopleGeneralInfo people={people}/>
						<div className="detail-page__additional-content">
							{hasFilms && (
								<EntityList entityList={people.films as Entity[]} category="films"/>
							)}
						</div>
					</div>
				</div>
			)}
			<NoData isVisible={!isFetching && !people} />
			<Fetching isVisible={isFetching} />
		</div>
	);
};