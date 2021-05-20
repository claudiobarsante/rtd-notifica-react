import * as S from './styles';
import { Notificacao } from 'hooks/use-notificacao';
import { Utils } from 'helpers/Utils';

type Props = {
	notificacaoDetails: Notificacao;
};

const NotificacaoItem = ({ notificacaoDetails }: Props) => {
	return (
		<S.NotificacaoContainer key={notificacaoDetails.notificadoId}>
			<S.Body>
				<S.NotIcon />
				<S.Protocolo>{`Protocolo : ${notificacaoDetails.protocolo}`}</S.Protocolo>
				<S.Nome>{Utils.titleCase(notificacaoDetails.nome)}</S.Nome>
				<S.Endereco>{Utils.titleCase(notificacaoDetails.endereco)}</S.Endereco>
				<span>{`dias em atraso ${notificacaoDetails.diasEmAtraso}`}</span>
			</S.Body>
		</S.NotificacaoContainer>
	);
};

export default NotificacaoItem;
