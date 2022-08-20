import React from 'react';
import {Banner} from './Banner';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

const BANNER_TEST_ID = 'banner';
const FALLBACK_BANNER_TEST_ID = 'fallback-banner';

const VALID_URL_IMAGE = 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg';

describe('Banner', () => {
	it('should render the banner image if a proper image url is provided', () => {
		render((
			<Banner imageUrl={VALID_URL_IMAGE} />
		));
        
		const banner = screen.getByTestId(BANNER_TEST_ID);
		expect(banner).toBeInTheDocument();
	});
	it('should render the fallback banner image if no image url is provided', () => {
		render((
			<Banner />
		));
		const fallbackBanner = screen.getByTestId(FALLBACK_BANNER_TEST_ID);
		expect(fallbackBanner).toBeInTheDocument();
	});
});
