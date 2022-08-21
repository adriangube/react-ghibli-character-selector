import React from 'react';

export type FetchingProps = {
    isVisible: boolean;
}

export const Fetching = ({isVisible}:FetchingProps ): JSX.Element => {
	return (
		<>
			{isVisible && (
				<div className='Fetching'>Fetching</div>
			)}
		</>
	);
};