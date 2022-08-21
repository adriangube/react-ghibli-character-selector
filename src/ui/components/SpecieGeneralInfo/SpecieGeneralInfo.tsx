import React from 'react';
import {Specie} from '../../../domain';
import '../../theme/general-info.css';

export type SpecieGeneralInfoProps = {
    specie: Specie;
}

export const SpecieGeneralInfo = ({specie}:SpecieGeneralInfoProps ): JSX.Element => {
	return (
		<div className="SpecieGeneralInfo general-info">
			<section>
				<h2>Information</h2>
				<p>
					<span className='label'>Classification: </span>
					<span>{specie.classification}</span>
				</p>
				<p>
					<span className='label'>Eye Colors: </span>
					<span>{specie.eyeColors}</span>
				</p>
				<p>
					<span className='label'>Hair Colors: </span>
					<span>{specie.hairColors}</span>
				</p>
			</section>
		</div>
	);
};