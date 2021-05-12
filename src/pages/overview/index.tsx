import { useCallback, useEffect, useState } from 'react';

import ActivityIndicator from 'components/Activity-Indicator';
import { useAuth } from 'hooks/use-auth';
import { Notificacao, useNotificacao } from 'hooks/use-notificacao';
import NotificacaoItem from '../../components/notificacao/Notificacao-Item';
import * as S from './styles';
import multiImg from 'assets/multi-transp.png';
import { Pagination } from './logic';

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

	return (
		<S.Container>
			<S.Title>
				<h1>Notificações</h1>
			</S.Title>
			<S.Left>
				<img src={multiImg} alt='Figura simulando um homem fazendo  várias coisas' />
			</S.Left>
			<S.Right>
				{isLoading && <ActivityIndicator isLoading={isLoading} />}
				{page &&
					page.map(notificacao => (
						<NotificacaoItem key={notificacao.notificadoId} notificacaoDetails={notificacao} />
					))}
			</S.Right>
			{/* <p>Overview</p>
			{<ActivityIndicator isLoading={isLoading} />}
			<S.Left>
				<img src={multiImg} alt='Figura simulando um homem fazendo  várias coisas' />
			</S.Left>
			<S.Right>
				{all &&
					all.map(notificacao => (
						<NotificacaoItem key={notificacao.notificadoId} notificacaoDetails={notificacao} />
					))}
			</S.Right> */}
		</S.Container>
	);
};

export default Overview;
