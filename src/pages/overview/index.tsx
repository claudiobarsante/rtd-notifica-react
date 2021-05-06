import { useEffect, useState } from 'react';

import { Notificacao, useNotificacao } from 'hooks/use-notificacao';
import { useAuth } from 'hooks/use-auth';
import ActivityIndicator from 'components/Activity-Indicator';

const Overview = () => {
	const [notificacoes, setNotificacoes] = useState<Notificacao[]>({} as Notificacao[]);
	const { getAllByOficioId, isLoading } = useNotificacao();
	const { currentUser } = useAuth();

	// useEffect(() => {
	// 	async function getNotificacoes() {
	// 		const notificacoesAll = await getAllByOficioId(currentUser.oficioId);
	// 		setNotificacoes(notificacoesAll);
	// 	}

	// 	getNotificacoes();

	// 	console.log('Notificações ', notificacoes);
	// }, [currentUser.oficioId, getAllByOficioId, notificacoes]);

	return (
		<div>
			<p>Overview</p>
			{/* {<ActivityIndicator isLoading={isLoading} />} */}
		</div>
	);
};

export default Overview;
