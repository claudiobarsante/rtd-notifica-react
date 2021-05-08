import { AiOutlineFileText } from 'react-icons/ai';
import { FiMoreVertical } from 'react-icons/fi';
import * as S from './styles';
import { Notificacao } from 'hooks/use-notificacao';

type Props = {
	notificacaoDetails: Notificacao;
};

const NotificacaoItem = ({ notificacaoDetails }: Props) => {
	return (
		<S.NotificacaoContainer key={notificacaoDetails.notificadoId}>
			<p>{notificacaoDetails.protocolo}</p>
			<span>{notificacaoDetails.nome}</span>
		</S.NotificacaoContainer>
	);
};

export default NotificacaoItem;
