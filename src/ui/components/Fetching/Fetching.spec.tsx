import React from 'react';
import {Fetching} from './Fetching';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

const MOCK_COMPONENT_CONTENT = 'Mock Component Test';

const MOCK_COMPONENT = () => {
	return (
		<div>{MOCK_COMPONENT_CONTENT}</div>
	);
};

describe('Fetching', () => {
	it('should render a children if the property is visible is truthy', () => {
		render((
			<Fetching isVisible={true}>
				<MOCK_COMPONENT />
			</Fetching>
		));
		const mockComponent = screen.getByText(MOCK_COMPONENT_CONTENT);
		expect(mockComponent).toBeInTheDocument();
	});
	it('should not render a children if the prop is visible is falsy', () => {
		render((
			<Fetching isVisible={false}>
				<MOCK_COMPONENT />
			</Fetching>
		));
		const mockComponent = screen.queryByText(MOCK_COMPONENT_CONTENT);
		expect(mockComponent).not.toBeInTheDocument();
	});
});