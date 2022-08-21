import React from 'react';
import {Vehicle} from '../../../domain';
import '../../theme/general-info.css';


export type VehicleGeneralInfoProps = {
    vehicle: Vehicle;
}

export const VehicleGeneralInfo = ({vehicle}:VehicleGeneralInfoProps ): JSX.Element => {
	return (
		<div className="VehicleGeneralInfo general-info">
			<section className='large-font-size'>
				<h2>Description</h2>
				<p>{vehicle.description}</p>
			</section>
			<section>
				<h2>Information</h2>
				<p>
					<span className='label'>Pilot: </span>
					<span>{vehicle?.pilot?.name}</span>
				</p>
				<p>
					<span className='label'>Class: </span>
					<span>{vehicle.vehicleClass}</span>
				</p>
				<p>
					<span className='label'>Length: </span>
					<span>{vehicle.length}m</span>
				</p>
			</section>
		</div>
	);
};