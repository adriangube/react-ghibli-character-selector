import React, {FormEventHandler, useEffect, useRef, useState} from 'react';
import {getFilmListUseCase} from '../../../application/film/getFilmListUseCase';
import {Film} from '../../../domain/film/film';
import {Fetching} from '../../components/Fetching/Fetching';
import {FilmItem} from '../../components/FilmItem/FilmItem';
import {FilmListSkeleton} from '../../components/FilmListSkeleton/FilmListSkeleton';
import {NoData} from '../../components/NoData/NoData';
import './Films.css';

export const Films = (): JSX.Element => {
	const [isFetching, setIsFetching] = useState(true);
	const [films, setFilms] = useState<Film[]>([]);
	const hasFilms = films?.length > 0;
	const inputRef = useRef<HTMLInputElement>(null);
	
	const [filteredFilms, setFilteredFilms] = useState<Film[]>([]);

	const typeHandler: FormEventHandler<HTMLInputElement> = (e) => {
		const search = e.currentTarget?.value?.trim();
		if (search) {
			const newFilteredFilms = films?.filter((film) => film?.title?.toLocaleLowerCase().includes(search?.toLocaleLowerCase()));
			setFilteredFilms(newFilteredFilms);
		} else {
			setFilteredFilms(films);
		}
	};

	const clearSearchHandler = () => {
		setFilteredFilms(films);
		if (inputRef && inputRef?.current) {
			inputRef.current.value = '';
		}
	};

	useEffect(() => {
		setIsFetching(true);
		getFilmListUseCase()
			.then((films) => {
				if (films) {
					setFilms(films);
					setFilteredFilms(films);
				}
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				setIsFetching(false);
			});
	}, []);


	return (
		<div className='Films'>
			<div className="Films__content">
				{!isFetching && hasFilms && (
					<>
						<div className='Films__searcher'>
							<input
								type="text"
								placeholder='Search by name'
								onInput={typeHandler}
								ref={inputRef}
								className="Films__searcher__input"
							/>
							<button
								className='Films__searcher__clear'
								onClick={clearSearchHandler}
								disabled={!inputRef?.current?.value}
							>
								Clear
							</button>
						</div>
						<div className='Films__films'>
							{filteredFilms.map((film) => (
								<FilmItem key={film.id} film={film} />
							))}
						</div>
					</>
				)}
				<NoData isVisible={!isFetching && !hasFilms} />
				<Fetching isVisible={isFetching}>
					<FilmListSkeleton />
				</Fetching>
			</div>
		</div>
	);
};

export default Films;