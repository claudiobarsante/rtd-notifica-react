import React, { useCallback, useEffect, useState } from 'react';
//Components
import ActivityIndicator from 'components/Activity-Indicator';
import NotificacaoItem from 'components/notificacao/Notificacao-Item';
import PaginationButtons from 'components/Pagination-Buttons';
import NotificacaoSearch from 'components/notificacao/Search';
import ClearButton from 'components/notificacao/Clear-Button';
//Hooks
import { useAuth } from 'hooks/use-auth';
import { Notificacao, useNotificacao } from 'hooks/use-notificacao';
//Styles
import * as S from './styles';
//Images
import multiImg from 'assets/multi-transp.png';
//Logic
import { Pagination, Search } from './logic';

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

	const handleClear = () => setInputText('');

	return (
		<S.Container>
			<S.Left>
				<img src={multiImg} alt='Figura simulando um homem fazendo  várias coisas' />
			</S.Left>
			<S.TopRight>
				<NotificacaoSearch text={inputText} onHandleChange={handleChange} />
				<ClearButton onClick={handleClear} />
			</S.TopRight>
			<S.Right>
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
