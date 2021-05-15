import React, { useCallback, useEffect, useState } from 'react';

import ActivityIndicator from 'components/Activity-Indicator';
import { useAuth } from 'hooks/use-auth';
import { Notificacao, useNotificacao } from 'hooks/use-notificacao';
import NotificacaoItem from '../../components/notificacao/Notificacao-Item';
import * as S from './styles';
import multiImg from 'assets/multi-transp.png';
import { Pagination, Search } from './logic';
import PaginationButtons from 'components/Pagination-Buttons';
import _ from 'lodash';

const FIRST_PAGE = 1;

const Overview = () => {
	//
	const { getTodasNotificacoesByOficioId, isLoading, todasNotificacoes } = useNotificacao();
	const { currentUser } = useAuth();

	const [totalPages, setTotalPages] = useState<number>(0);
	const [recordsPerPage] = useState<number>(4);
	const [page, setPage] = useState<Notificacao[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(FIRST_PAGE);
	const [inputText, setInputText] = useState('');
	const [filteredNotificacoes, setFilteredNotificacoes] = useState<Notificacao[]>(
		{} as Notificacao[]
	);

	const loadRecordsToPage = useCallback(
		(currentPage: number) => {
			const records = Pagination.getRecordsPerPage(
				currentPage,
				recordsPerPage,
				filteredNotificacoes
			);
			setPage(records);
		},
		[filteredNotificacoes, recordsPerPage]
	);

	useEffect(() => {
		setFilteredNotificacoes(todasNotificacoes);
	}, [todasNotificacoes]);

	useEffect(() => {
		const countPages = Pagination.getTotalNumberOfPages(
			filteredNotificacoes.length,
			recordsPerPage
		);
		setTotalPages(countPages);
	}, [filteredNotificacoes.length, recordsPerPage]);

	useEffect(() => {
		getTodasNotificacoesByOficioId(currentUser.oficioId);
	}, [currentUser.oficioId, getTodasNotificacoesByOficioId]);

	useEffect(() => {
		if (totalPages) loadRecordsToPage(FIRST_PAGE);
	}, [loadRecordsToPage, totalPages]);

	const handlePreviousClick = useCallback(() => {
		if (currentPage === 1) return;

		const newPage = currentPage - 1;
		loadRecordsToPage(newPage);
		setCurrentPage(newPage);
	}, [currentPage, loadRecordsToPage]);

	const handleNextClick = useCallback(() => {
		if (currentPage === filteredNotificacoes.length) return;

		const newPage = currentPage + 1;
		loadRecordsToPage(newPage);
		setCurrentPage(newPage);
	}, [filteredNotificacoes.length, currentPage, loadRecordsToPage]);

	//todo: add _.debounce
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const text = e.target.value;
		setInputText(text);
		const filtered = Search.filterNotificacoes(text, todasNotificacoes);
		setFilteredNotificacoes(filtered);
	};

	return (
		<S.Container>
			<S.Left>
				<img src={multiImg} alt='Figura simulando um homem fazendo  várias coisas' />
			</S.Left>
			<S.Right>
				<input
					type='text'
					placeholder='Pesquise aqui..'
					onChange={handleChange}
					value={inputText}
				/>
				{isLoading && <ActivityIndicator isLoading={isLoading} />}
				{page &&
					page.map(notificacao => (
						<NotificacaoItem key={notificacao.notificadoId} notificacaoDetails={notificacao} />
					))}

				<PaginationButtons
					totalPages={totalPages}
					onPreviousClick={handlePreviousClick}
					onNextClick={handleNextClick}
					currentPage={currentPage}
				/>
			</S.Right>
		</S.Container>
	);
};

export default Overview;
