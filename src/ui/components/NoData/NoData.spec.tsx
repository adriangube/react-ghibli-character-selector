import React from 'react';
import {NoData} from './NoData';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import {MemoryRouter} from 'react-router-dom';

const ALT_IMAGE_TEXT = 'no content';
const H2_TEXT = 'Ups! Something went wrong!';
const BUTTON_TEXT = 'Go to the Home Page';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUsedNavigate,
}));

describe('NoData', () => {
	it('should render the info if the property isVisible is truthy', () => {
		render((
			<MemoryRouter>
				<NoData isVisible={true} />
			</MemoryRouter>
		));
        
		const image = screen.getByAltText(ALT_IMAGE_TEXT);
		expect(image).toBeInTheDocument();

		const message = screen.getByText(H2_TEXT);
		expect(message).toBeInTheDocument();

		const button = screen.getByText(BUTTON_TEXT);
		expect(button).toBeInTheDocument();
	});
	it('should not render the info if the property is falsy', () => {
		render((
			<MemoryRouter>
				<NoData isVisible={false} />
			</MemoryRouter>
		));
        
		const image = screen.queryByAltText(ALT_IMAGE_TEXT);
		expect(image).not.toBeInTheDocument();

		const message = screen.queryByText(H2_TEXT);
		expect(message).not.toBeInTheDocument();

		const button = screen.queryByText(BUTTON_TEXT);
		expect(button).not.toBeInTheDocument();
	});
	it('should navigate to films if the button is clicked', async () => {
		render((
			<MemoryRouter>
				<NoData isVisible={true} />
			</MemoryRouter>
		));
        
		const button = screen.getByText(BUTTON_TEXT);
		expect(button).toBeInTheDocument();
		expect(mockedUsedNavigate).toHaveBeenCalledTimes(0);
        
		fireEvent.click(button);

		await waitFor(() => {
			expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
			expect(mockedUsedNavigate).toHaveBeenCalledWith('/films');
		});
	});
});