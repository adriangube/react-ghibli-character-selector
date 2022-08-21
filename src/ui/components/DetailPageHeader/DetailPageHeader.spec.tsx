import React from 'react';
import {render, screen} from '@testing-library/react';
import { DetailPageHeader } from './DetailPageHeader';
import '@testing-library/jest-dom';


const BANNER_IMAGE_TEST_ID = 'banner';

describe('DetailPageHeader', () => {
	it('should print the banner and images provided by params', () => {
		const VALID_IMAGE_URL = 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg';
		const TITLE = 'Title';

		render((
			<DetailPageHeader imageUrl={VALID_IMAGE_URL} title={TITLE} />
		));
        
		const bannerImage: HTMLImageElement = screen.getByTestId(BANNER_IMAGE_TEST_ID);
		expect(bannerImage).toBeInTheDocument();
		expect(bannerImage.src).toContain(VALID_IMAGE_URL);

		const title = screen.getByText(TITLE);
		expect(title).toBeInTheDocument();

	});
});