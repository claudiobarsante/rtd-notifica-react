import React, { useEffect } from 'react';
import { getAllNotificacoesService } from '../../services/notificacaoService';
export default function Overview() {
	useEffect(() => {
		getAllNotificacoesService(155).then(response => console.log('response ', response.data));
	}, []);
	return (
		<div>
			<p>Overview !!!</p>
		</div>
	);
}
