import { useCallback, useEffect, useState } from 'react';

import ActivityIndicator from 'components/Activity-Indicator';
import { useAuth } from 'hooks/use-auth';
import { Notificacao, useNotificacao } from 'hooks/use-notificacao';
import NotificacaoItem from '../../components/notificacao/Notificacao-Item';
import * as S from './styles';
import multiImg from 'assets/multi-transp.png';
import { Pagination } from './logic';
import PaginationButtons from 'components/Pagination-Buttons';

const FIRST_PAGE = 1;
const Overview = () => {
	//const [notificacoes, setNotificacoes] = useState<Notificacao[]>({} as Notificacao[]);
	const { getAllByOficioId, isLoading, all } = useNotificacao();
	const { currentUser } = useAuth();
	const [totalPages, setTotalPages] = useState<number>(0);
	const [recordsPerPage, setRecordsPerPage] = useState<number>(5);
	const [page, setPage] = useState<Notificacao[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(FIRST_PAGE);

	const loadRecordsToPage = useCallback(
		(currentPage: number) => {
			const records = Pagination.getRecordsPerPage(currentPage, recordsPerPage, all);
			setPage(records);
		},
		[all, recordsPerPage]
	);

	useEffect(() => {
		const countPages = Pagination.getTotalNumberOfPages(all.length, recordsPerPage);
		setTotalPages(countPages);
	}, [all.length, recordsPerPage]);

	useEffect(() => {
		getAllByOficioId(currentUser.oficioId);
	}, [currentUser.oficioId, getAllByOficioId]);

	useEffect(() => {
		if (totalPages) loadRecordsToPage(FIRST_PAGE);
	}, [loadRecordsToPage, totalPages]);

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
			if (currentPage === all.length) return;

			const newPage = currentPage + 1;
			loadRecordsToPage(newPage);
			setCurrentPage(newPage);
		},
		[all.length, loadRecordsToPage]
	);

	return (
		<S.Container>
			<S.Left>
				<img src={multiImg} alt='Figura simulando um homem fazendo  várias coisas' />
			</S.Left>
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
