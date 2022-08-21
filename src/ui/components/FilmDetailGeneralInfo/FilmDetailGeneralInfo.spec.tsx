import React from 'react';
import {FilmDetailGeneralInfo} from './FilmDetailGeneralInfo';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

const FILM = {

	'id': '2baf70d1-42bb-4437-b551-e5fed5a87abe',
	'title': 'Castle in the Sky',
	'originalTitle': '天空の城ラピュタ',
	'originalTitleRomanized': 'Tenkū no shiro Rapyuta',
	'image': 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg',
	'movieBanner': 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg',
	'description': 'The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa\'s science to make himself ruler of the world.',
	'director': 'Hayao Miyazaki',
	'producer': 'Isao Takahata',
	'releaseDate': '1986',
	'runningTime': '124',
	'score': '95'
};

describe('FilmDetailGeneralInfo', () => {
	it('should render the props of the film provided', () => {
		render((
			<FilmDetailGeneralInfo film={FILM} />
		));
		const description = screen.getByText(FILM.description);
		expect(description).toBeInTheDocument();
        
		const director = screen.getByText(FILM.director);
		expect(director).toBeInTheDocument();

		const producer = screen.getByText(FILM.producer);
		expect(producer).toBeInTheDocument();

		const releaseDate = screen.getByText(FILM.releaseDate);
		expect(releaseDate).toBeInTheDocument();

		const runningTime = screen.getByText(`${FILM.runningTime}min.`);
		expect(runningTime).toBeInTheDocument();

		const score = screen.getByText(FILM.score);
		expect(score).toBeInTheDocument();
	});
});