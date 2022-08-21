import React from 'react';
import '../../theme/skeleton.css';
import './LinkSkeleton.css';

export const LinkSkeleton = ( ): JSX.Element => {
	return (
		<div className="LinkSkeleton">
			<div className="LinkSkeleton__decoration skeleton" />
			<div className="LinkSkeleton__text skeleton"/>
		</div>
	);
};