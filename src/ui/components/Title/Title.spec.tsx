import React from 'react';
import {Title} from './Title';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

const TITLE_TEXT = 'test title';

describe('Title', () => {
	it('should render the title provided', () => {
		render((
			<Title title={TITLE_TEXT} />
		));
        
		const titleText = screen.getByText(TITLE_TEXT);
		expect(titleText).toBeInTheDocument();
	});
});