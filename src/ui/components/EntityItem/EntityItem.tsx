import React, {startTransition} from 'react';
import {useNavigate} from 'react-router-dom';
import {Entity} from '../../../domain';
import './EntityItem.css';

export type EntityItemProps = {
    entity: Entity;
    category: string;
}

export const EntityItem = ({entity, category}: EntityItemProps): JSX.Element => {
	const navigate = useNavigate();
    
	const onClickHandler = () => {
		startTransition(() => {
			navigate(`/${category}/${entity.id}`);
		});
	};

	return (
		<li className='Entity' onClick={onClickHandler}>
			{entity.name}
		</li>
	);
};