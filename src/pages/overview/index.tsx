import { useCallback, useEffect, useState } from 'react';

import ActivityIndicator from 'components/Activity-Indicator';
import { useAuth } from 'hooks/use-auth';
import { Notificacao, useNotificacao } from 'hooks/use-notificacao';
import NotificacaoItem from '../../components/notificacao/Notificacao-Item';
import * as S from './styles';
import multiImg from 'assets/multi-transp.png';
const Overview = () => {
	//const [notificacoes, setNotificacoes] = useState<Notificacao[]>({} as Notificacao[]);
	const { getAllByOficioId, isLoading, all } = useNotificacao();
	const { currentUser } = useAuth();
	const [totalPages, setTotalPages] = useState<number>(0);
	const [recordsPerPage, setRecordsPerPage] = useState<number>(5);
	const [page, setPage] = useState<Notificacao[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);

	const loadRecordsToPage = useCallback(
		(currentPage: number) => {
			const startIdx = (currentPage - 1) * recordsPerPage;
			let endIdx = startIdx + recordsPerPage;

			let records = [];
			if (endIdx >= all.length - 1) {
				records = all.slice(startIdx);
			} else {
				records = all.slice(startIdx, endIdx);
			}
			setPage(records);
		},
		[all, recordsPerPage]
	);

	useEffect(() => {
		const countPages = Math.ceil(all.length / recordsPerPage);
		setTotalPages(countPages);
	}, [all.length, recordsPerPage]);

	useEffect(() => {
		getAllByOficioId(currentUser.oficioId);
	}, [currentUser.oficioId, getAllByOficioId]);

	useEffect(() => {
		console.log('passei..........');
		if (totalPages) {
			loadRecordsToPage(1);
		}
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
