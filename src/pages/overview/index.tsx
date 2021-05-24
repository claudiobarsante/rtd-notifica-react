import React, { useCallback, useEffect, useState } from 'react';
//Components
import ActivityIndicator from 'components/Activity-Indicator';
import ClearButton from 'components/notificacao/Clear-Button';
import FilterButton from 'components/notificacao/Filter-Button';
import NotificacaoItem from 'components/notificacao/Notificacao-Item';
import NotificacaoSearch from 'components/notificacao/Search';
import PaginationButtons from 'components/Pagination-Buttons';
//Hooks
import { useAuth } from 'hooks/use-auth';
import { Notificacao, useNotificacao } from 'hooks/use-notificacao';
//Styles
import * as S from './styles';
//Images
import multiImg from 'assets/multi-transp.png';
//Logic
import { Pagination, Search, PaginationDirection, Filters } from './logic';
import { ResponseCode } from 'types/response';
import sessionExpiredImg from '../../assets/session-expired.jpg';
import { Redirect } from 'react-router-dom';

const FIRST_PAGE = 1;

const Overview = () => {
	//state
	const [currentPage, setCurrentPage] = useState<number>(FIRST_PAGE);
	const [totalPages, setTotalPages] = useState<number>(0);
	const [recordsPerPage] = useState<number>(4);
	const [page, setPage] = useState<Notificacao[]>([]);
	const [filteredNotificacoes, setFilteredNotificacoes] = useState<Notificacao[]>(
		{} as Notificacao[]
	);
	const [inputText, setInputText] = useState('');
	//hooks
	const { getTodasNotificacoesByOficioId, isLoading, todasNotificacoes, error } = useNotificacao();
	const { currentUser, resetUserState } = useAuth();

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
		(direction: PaginationDirection) => {
			let newPage = Pagination.selectPage(currentPage, direction, filteredNotificacoes.length);
			if (newPage === currentPage) return;

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

	const handleFilter = useCallback(
		(filter: Filters) => {
			const filtered = Search.filterNotificacoesByDiasEmAtraso(todasNotificacoes, filter);
			setFilteredNotificacoes(filtered);
		},
		[todasNotificacoes]
	);

	//todo: refactor UNAUTHORIZED and modal
	const { code, message } = error;

	const handleCloseModal = useCallback(() => {
		resetUserState();
		return <Redirect to='/' />;
	}, [resetUserState]);

	if (code === ResponseCode.UNAUTHORIZED) {
		return (
			<S.StyledModal isOpen={true}>
				<div>
					<h2>Sessão expirada</h2>
					<h4>{message}</h4>
					<img
						src={sessionExpiredImg}
						alt='Imagem em azul com um ícnoe indicando para recarregar a página'
					/>
					<button onClick={() => handleCloseModal()}>Fazer login novamente</button>
				</div>
			</S.StyledModal>
		);
	}

	return (
		<S.Container>
			<S.Left>
				<img src={multiImg} alt='Figura simulando um homem fazendo  várias coisas' />
			</S.Left>
			<S.TopRight>
				<NotificacaoSearch text={inputText} onHandleChange={handleChange} />
				<ClearButton onClick={handleClear} />
				<FilterButton onFilter={handleFilter} />
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
