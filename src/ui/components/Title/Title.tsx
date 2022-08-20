import React from 'react';
import './Title.css';

export type TitleProps = {
    title: string;
}

export const Title = ({title}:TitleProps ): JSX.Element => {
	return (
		<div className="Title">{title}</div>
	);
};