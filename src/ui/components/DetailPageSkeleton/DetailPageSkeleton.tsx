import React from 'react';
import {BannerSkeleton} from '../BannerSkeleton/BannerSkeleton';
import {DetailTitleSkeleton} from '../DetailTitleSkeleton/DetailTitleSkeleton';
import {LinkSkeleton} from '../LinkSkeleton/LinkSkeleton';
import {TextSkeleton} from '../TextSkeleton/TextSkeleton';
import './DetailPageSkeleton.css';

export const DetailPageSkeleton = (): JSX.Element => {
	return (
		<div className="DetailPageSkeleton">
			<BannerSkeleton />
			<div className='DetailPageSkeleton__content'>
				<section>
					<DetailTitleSkeleton />
					<TextSkeleton />
				</section>
				<section>
					<DetailTitleSkeleton />
					<LinkSkeleton />
					<LinkSkeleton />
					<LinkSkeleton />
					<LinkSkeleton />
				</section>
				<section>
					<DetailTitleSkeleton />
					<LinkSkeleton />
					<LinkSkeleton />
					<LinkSkeleton />
					<LinkSkeleton />
				</section>
				<section>
					<DetailTitleSkeleton />
					<LinkSkeleton />
					<LinkSkeleton />
					<LinkSkeleton />
					<LinkSkeleton />
				</section>
			</div>
		</div>
	);
};