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
import FilterButton from 'components/notificacao/Filter-Button';

const FIRST_PAGE = 1;

const Overview = () => {
	//state
	const [currentPage, setCurrentPage] = useState<number>(FIRST_PAGE);
	const [totalPages, setTotalPages] = useState<number>(0);
	const [recordsPerPage] = useState<number>(4);
	const [page, setPage] = useState<Notificacao[]>([]);
	const [inputText, setInputText] = useState('');
	const [filteredNotificacoes, setFilteredNotificacoes] = useState<Notificacao[]>(
		{} as Notificacao[]
	);
	//hooks
	const { getTodasNotificacoesByOficioId, isLoading, todasNotificacoes } = useNotificacao();
	const { currentUser } = useAuth();

	useEffect(() => {
		getTodasNotificacoesByOficioId(currentUser.oficioId);
	}, [currentUser.oficioId, getTodasNotificacoesByOficioId]);

	useEffect(() => {
		setFilteredNotificacoes(todasNotificacoes);
	}, [todasNotificacoes]);

	const loadRecordsToPage = useCallback(
		(currentPage: number) => {
			const records = Pagination.getRecordsPerPage(
				filteredNotificacoes,
				currentPage,
				recordsPerPage
			);
			setPage(records);
		},
		[filteredNotificacoes, recordsPerPage]
	);

	useEffect(() => {
		const countPages = Pagination.getTotalNumberOfPages(
			filteredNotificacoes.length,
			recordsPerPage
		);
		setTotalPages(countPages);
		if (totalPages) loadRecordsToPage(FIRST_PAGE);
	}, [filteredNotificacoes.length, loadRecordsToPage, recordsPerPage, totalPages]);

	const handleSelectPage = useCallback(
		(direction: 'previous' | 'next') => {
			let newPage = Pagination.selectPage(currentPage, direction, filteredNotificacoes.length);
			if (!newPage) return;

			loadRecordsToPage(newPage);
			setCurrentPage(newPage);
		},
		[currentPage, filteredNotificacoes.length, loadRecordsToPage]
	);

	//todo: add _.debounce
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const text = e.target.value;
		setInputText(text);
		const filtered = Search.filterNotificacoes(text, todasNotificacoes);
		setFilteredNotificacoes(filtered);
	};

	const handleClear = useCallback(() => {
		setInputText('');
		setFilteredNotificacoes(todasNotificacoes);
	}, [todasNotificacoes]);

	return (
		<S.Container>
			<S.Left>
				<img src={multiImg} alt='Figura simulando um homem fazendo  várias coisas' />
			</S.Left>
			<S.TopRight>
				<NotificacaoSearch text={inputText} onHandleChange={handleChange} />
				<ClearButton onClick={handleClear} />
				<FilterButton />
			</S.TopRight>
			<S.Right>
				{isLoading && <ActivityIndicator isLoading={isLoading} />}
				{page &&
					page.map(notificacao => (
						<NotificacaoItem key={notificacao.notificadoId} notificacaoDetails={notificacao} />
					))}

				<PaginationButtons
					totalPages={totalPages}
					onClickDirection={handleSelectPage}
					currentPage={currentPage}
				/>
			</S.Right>
		</S.Container>
	);
};

export default Overview;
