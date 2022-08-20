import React from 'react';
import {FilmItem} from './FilmItem';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import {FILM_MOCK} from './FilmItemMockData';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

const FILM_ITEM_TEST_ID = 'FilmItem';
const IMAGE_TEST_ID = 'FilmItem__image';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUsedNavigate,
}));

describe('FilmItem', () => {
	it('should be in the document with the data provided', async() => {
		render((
			<MemoryRouter initialEntries={['/films']}>
				<FilmItem film={FILM_MOCK} />
			</MemoryRouter>
		));
		const filmItem = screen.getByTestId(FILM_ITEM_TEST_ID);
		const image: HTMLImageElement = screen.getByTestId(IMAGE_TEST_ID);
		const title = screen.getByText(FILM_MOCK.title);
		expect(filmItem).toBeInTheDocument();
		expect(image).toBeInTheDocument();
		expect(title).toBeInTheDocument();
		expect(image.src).toStrictEqual(FILM_MOCK.movieBanner);
		expect(image.alt).toStrictEqual(`${FILM_MOCK.title} banner`);
		expect(mockedUsedNavigate).toHaveBeenCalledTimes(0);
		fireEvent.click(filmItem);
		await waitFor(() => {
			expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
			expect(mockedUsedNavigate).toHaveBeenCalledWith(`/films/${FILM_MOCK.id}`);
		});
	});
});