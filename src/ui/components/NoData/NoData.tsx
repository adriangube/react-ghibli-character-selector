import React from 'react';
import {useNavigate} from 'react-router-dom';
import logo from '../../../assets/no-content.png';
import './NoData.css';

export type NoDataProps = {
    isVisible: boolean;
}

export const NoData = ({isVisible}:NoDataProps ): JSX.Element => {
	const navigate = useNavigate();
	const clickHandler = () => {
		navigate('/films');
	};

	return (
		<>
			{isVisible && (
				<div className='NoData'>
					<img src={logo} alt="no content" width="200px" height="200px"/>
					<h2>Ups! Something went wrong!</h2>
					<button onClick={clickHandler}>Go to the Home Page</button>
				</div>
			)}
		</>
	);
};