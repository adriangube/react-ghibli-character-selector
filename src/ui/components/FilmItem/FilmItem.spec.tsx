import React from 'react';
import {FilmItem} from './FilmItem';
import { render, screen } from '@testing-library/react';
import {FILM_MOCK} from './FilmItemMockData';
import '@testing-library/jest-dom';

const FILM_ITEM_TEST_ID = 'FilmItem';
const IMAGE_TEST_ID = 'FilmItem__image';

describe('FilmItem', () => {
	it('should be in the document with the data provided', () => {
		render(<FilmItem film={FILM_MOCK} />);
		const filmItem = screen.getByTestId(FILM_ITEM_TEST_ID);
		const image: HTMLImageElement = screen.getByTestId(IMAGE_TEST_ID);
		const title = screen.getByText(FILM_MOCK.title);
		expect(filmItem).toBeInTheDocument();
		expect(image).toBeInTheDocument();
		expect(title).toBeInTheDocument();
		expect(image.src).toStrictEqual(FILM_MOCK.movieBanner);
		expect(image.alt).toStrictEqual(`${FILM_MOCK.title} banner`);
	});
});