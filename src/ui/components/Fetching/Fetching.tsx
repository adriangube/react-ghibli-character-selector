import React from 'react';

export type FetchingProps = {
	isVisible: boolean;
	children?: JSX.Element
}

export const Fetching = ({isVisible, children}:FetchingProps ): JSX.Element => {
	return (
		<>
			{isVisible && (
				<div className='Fetching'>
					{children}
				</div>
			)}
		</>
	);
};