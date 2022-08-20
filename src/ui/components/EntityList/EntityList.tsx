import React from 'react';
import {Entity} from '../../../domain';
import {EntityItem} from '../EntityItem/EntityItem';
import './EntityList.css';

export type EntityListProps = {
    entityList: Entity[];
    category: string;
}

export const EntityList = ({entityList, category}:EntityListProps ): JSX.Element => {
	return (
		<div className="EntityList">
			<h2 className="EntityList__category">
				{category}
			</h2>
			<ul>
				{entityList.map((entity) => (
					<EntityItem
						key={entity.id}
						entity={entity}
						category={category}
					/>
				))}
			</ul>
		</div>
	);
};