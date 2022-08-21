import React from 'react';
import {EntityList} from './EntityList';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {MemoryRouter} from 'react-router-dom';

const ENTITY_LIST = [
	{
		id: '1',
		name: 'entity1'
	},
	{
		id: '2',
		name: 'entity2'
	}
];

const CATEGORY = 'category-test';

describe('EntityList', () => {
	it('should render an h2 with the category as content and a list of EntityItem', () => {
		render((
			<MemoryRouter>
				<EntityList entityList={ENTITY_LIST} category={CATEGORY} />
			</MemoryRouter>
		));
		const categoryElement = screen.getByText(CATEGORY);
		expect(categoryElement).toBeInTheDocument();

		const entity1 = screen.getByText(ENTITY_LIST[0].name);
		expect(entity1).toBeInTheDocument();

		const entity2 = screen.getByText(ENTITY_LIST[1].name);
		expect(entity2).toBeInTheDocument();
	});
});