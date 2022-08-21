import React from 'react';
import '../../theme/skeleton.css';
import './TextSkeleton.css';

export const TextSkeleton = (): JSX.Element => {
	return (
		<div className="TextSkeleton">
			<div className="TextSkeleton__line TextSkeleton__line--large skeleton"></div>
			<div className="TextSkeleton__line TextSkeleton__line--large skeleton"></div>
			<div className="TextSkeleton__line TextSkeleton__line--large skeleton"></div>
			<div className="TextSkeleton__line TextSkeleton__line--large skeleton"></div>
			<div className="TextSkeleton__line TextSkeleton__line--medium skeleton"></div>
			<div className="TextSkeleton__line TextSkeleton__line--small skeleton"></div>
		</div>
	);
};