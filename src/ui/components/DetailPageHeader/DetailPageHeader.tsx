import React from 'react';
import {Banner} from '../Banner/Banner';
import {Title} from '../Title/Title';
import '../../theme/detail-pages.css';

export type DetailPageHeaderProps = {
    imageUrl?: string;
    title: string;
}

export const DetailPageHeader = ({imageUrl, title}:DetailPageHeaderProps ): JSX.Element => {
	return (
		<div className="detail-page__header">
			<Banner imageUrl={imageUrl} />
			<Title title={title} />
		</div>
	);
};