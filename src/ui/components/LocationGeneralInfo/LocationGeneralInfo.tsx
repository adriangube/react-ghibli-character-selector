import React from 'react';
import {Location} from '../../../domain';
import '../../theme/general-info.css';

export type LocationGeneralInfoProps = {
    location: Location;
}

export const LocationGeneralInfo = ({location}:LocationGeneralInfoProps ): JSX.Element => {
	return (
		<div className='LocationGeneralInfo general-info'>
			<section>
				<h2>Information</h2>
				<p>
					<span className='label'>Climate: </span>
					<span>{location.climate}</span>
				</p>
				<p>
					<span className='label'>Terrain: </span>
					<span>{location.terrain}</span>
				</p>
				<p>
					<span className='label'>Surface Water: </span>
					<span>{location.surfaceWater}%</span>
				</p>
			</section>
		</div>
	);
};