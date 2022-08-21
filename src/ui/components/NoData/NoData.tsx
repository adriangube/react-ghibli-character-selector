import React from 'react';

export type NoDataProps = {
    isVisible: boolean;
}

export const NoData = ({isVisible}:NoDataProps ): JSX.Element => {
	return (
		<>
			{isVisible && (
				<div className='NoData'>
                No Data
				</div>
			)}
		</>
	);
};