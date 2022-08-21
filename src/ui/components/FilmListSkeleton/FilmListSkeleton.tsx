import React from 'react';
import '../../theme/skeleton.css';
import './FilmListSkeleton.css';

export const FilmListSkeleton = ( ): JSX.Element => {
	return (
		<div className='FilmListSkeleton'>
			{Array.from(Array(22).keys()).map((x) => (
				<div key={x} className="FilmListSkeleton__item skeleton" />
			))}
		</div>
	);
};