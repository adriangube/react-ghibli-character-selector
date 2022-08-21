import React from 'react';
import {People} from '../../../domain';
import '../../theme/general-info.css';

export type PeopleGeneralInfoProps = {
    people: People;
}

export const PeopleGeneralInfo = ({people}:PeopleGeneralInfoProps ): JSX.Element => {
	return (
		<div className="PeopleGeneralInfo general-info">
			<section>
				<h2>Information</h2>
				<p>
					<span className='label'>Specie: </span>
					<span>{people.species.name}</span>
				</p>
				<p>
					<span className='label'>Gender: </span>
					<span>{people.gender}</span>
				</p>
				<p>
					<span className='label'>Eye Color: </span>
					<span>{people.eyeColor}</span>
				</p>
				<p>
					<span className='label'>Hair Color: </span>
					<span>{people.hairColor}</span>
				</p>
			</section>
		</div>
	);
};