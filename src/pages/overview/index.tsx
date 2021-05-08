import { useEffect, useState } from 'react';

import ActivityIndicator from 'components/Activity-Indicator';
import { useAuth } from 'hooks/use-auth';
import { Notificacao, useNotificacao } from 'hooks/use-notificacao';

const Overview = () => {
	//const [notificacoes, setNotificacoes] = useState<Notificacao[]>({} as Notificacao[]);
	const { getAllByOficioId, isLoading, all } = useNotificacao();
	const { currentUser } = useAuth();

	useEffect(() => {
		getAllByOficioId(currentUser.oficioId);
	}, [currentUser.oficioId, getAllByOficioId]);

	return (
		<div>
			<p>Overview</p>
			{<ActivityIndicator isLoading={isLoading} />}
			{all?.length}
		</div>
	);
};

export default Overview;
