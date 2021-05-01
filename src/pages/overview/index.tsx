import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/configureStore';
import * as S from './styles';

import { getAllRequest } from '../../store/notificacao/actions';
import { Notificacao } from '../../store/notificacao/types';
import Pagination from '../../components/pagination';
import { ResponseError, ResponseCode } from '../../types/response';
import { Redirect } from 'react-router-dom';
import { resetUserState } from '../../store/auth/actions';
import sessionExpiredImg from '../../assets/session-expired.jpg';

const Overview = () => {
	//
	const [totalPages, setTotalPages] = useState<number>(0);
	const [recordsPerPage, setRecordsPerPage] = useState<number>(10);
	const [page, setPage] = useState<Notificacao[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);

	const oficioId = useSelector<State, number>(state => state.auth.currentUser.oficioId);
	const filtered = useSelector<State, Notificacao[]>(
		state => state.notificacoes.filteredNotificacoes
	);

	const { code, message } = useSelector<State, ResponseError>(state => state.notificacoes.error);

	const dispatch = useDispatch();

	const loadRecordsToPage = useCallback(
		(currentPage: number) => {
			const startIdx = (currentPage - 1) * recordsPerPage;
			let endIdx = startIdx + recordsPerPage;

			let records = [];
			if (endIdx >= filtered.length - 1) {
				records = filtered.slice(startIdx);
			} else {
				records = filtered.slice(startIdx, endIdx);
			}
			setPage(records);
		},
		[filtered, recordsPerPage]
	);

	useEffect(() => {
		dispatch(getAllRequest(oficioId));

		const countPages = Math.ceil(filtered.length / recordsPerPage);
		setTotalPages(countPages);
	}, [dispatch, filtered.length, oficioId, recordsPerPage]);

	const handlePageChange = useCallback(
		(currentPage: number) => {
			console.log('page cliked ', currentPage);
			loadRecordsToPage(currentPage);
			setCurrentPage(currentPage);
		},
		[loadRecordsToPage]
	);

	useEffect(() => {
		console.log('passei..........');
		if (totalPages) {
			loadRecordsToPage(1);
		}
	}, [loadRecordsToPage, totalPages]);

	const handleCloseModal = useCallback(() => {
		dispatch(resetUserState());
		return <Redirect to='/' />;
	}, [dispatch]);

	const handlePreviousClick = useCallback(
		(currentPage: number) => {
			if (currentPage === 1) return;

			const newPage = currentPage - 1;
			loadRecordsToPage(newPage);
			setCurrentPage(newPage);
		},
		[loadRecordsToPage]
	);

	const handleNextClick = useCallback(
		(currentPage: number) => {
			if (currentPage === filtered.length) return;

			const newPage = currentPage + 1;
			loadRecordsToPage(newPage);
			setCurrentPage(newPage);
		},
		[filtered.length, loadRecordsToPage]
	);

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
					<button onClick={handleCloseModal}>Fazer login novamente</button>
				</div>
			</S.StyledModal>
		);
	}

	return (
		<S.Container>
			<h1>Notificações</h1>

			<table>
				<thead>
					<tr>
						<th>Protocolo</th>
						<th>Nome</th>
						<th>Endereco</th>
					</tr>
				</thead>
				<tbody>
					{page &&
						page.map(notificacao => (
							<tr key={notificacao.notificadoId}>
								<td>{notificacao.protocolo}</td>
								<td>{notificacao.nome}</td>
								<td>{notificacao.logradouro}</td>
							</tr>
						))}
				</tbody>
			</table>
			<Pagination
				totalPages={totalPages}
				onPreviousClick={handlePreviousClick}
				onNextClick={handleNextClick}
				currentPage={currentPage}
			/>
		</S.Container>
	);
};

export default Overview;
