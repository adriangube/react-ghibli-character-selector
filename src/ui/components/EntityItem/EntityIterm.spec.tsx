import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { EntityItem } from './EntityItem';
import {MemoryRouter} from 'react-router-dom';

const ENTITY = {
	id: 'id',
	name: 'name'
};
const CATEGORY = 'categoryName';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUsedNavigate,
}));

describe('EntityItem', () => {
	it('should render an li with the entity name as content', () => {
		
		render((
			<MemoryRouter>
				<EntityItem entity={ENTITY} category={CATEGORY} />
			</MemoryRouter>
		));
		const entityItem = screen.getByText(ENTITY.name);
		expect(entityItem).toBeInTheDocument();
	});
	it('should navigate to the category detail provided when a click event is fired ', async () => {
		
		render((
			<MemoryRouter>
				<EntityItem entity={ENTITY} category={CATEGORY} />
			</MemoryRouter>
		));
		const entityItem = screen.getByText(ENTITY.name);
		expect(entityItem).toBeInTheDocument();
        
		expect(mockedUsedNavigate).toHaveBeenCalledTimes(0);
		fireEvent.click(entityItem);
        
		await waitFor(() => {
			expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
			expect(mockedUsedNavigate).toHaveBeenCalledWith(`/${CATEGORY}/${ENTITY.id}`);
		});
	});
});