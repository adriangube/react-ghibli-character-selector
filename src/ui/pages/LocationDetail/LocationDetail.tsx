import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Location} from '../../../domain';


export const LocationDetail = (): JSX.Element => {
	const [isFetching, setIsFetching] = useState(true);
	const [location, setLocation] = useState<Location>();
	const {id} = useParams();
	const hasResidents = location?.residents && location?.residents?.length > 0;
	const hasFilms = location?.films && location?.films?.length > 0;
	
	

	return (
		<div className="LocationDetail">
            Location Detail
		</div>
	);
};