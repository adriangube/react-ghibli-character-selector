import React from 'react';
import './Banner.css';
import fallbackImage from '../../../assets/dummy-image.gif';

export type BannerProps = {
    imageUrl?: string;
}

export const Banner = ({ imageUrl }:BannerProps ): JSX.Element => {
	return (
		<div className="Banner">
			{imageUrl && (
				<img
					src={imageUrl}
					onError={(e) => {
						e.currentTarget.src = fallbackImage;
						e.currentTarget.classList.add('Banner__image--error');
					}}
					width="100%"
					height="200px"
					className='Banner__image'
					loading='lazy'
					alt="banner"
				/>
			)}
			{!imageUrl && (
				<img
					src={fallbackImage}
					alt="fallback banner"
					width="100%"
					height="200px"
					className='Banner__fallback'
					loading='lazy'
				/>
			)}
		</div>
	);
};