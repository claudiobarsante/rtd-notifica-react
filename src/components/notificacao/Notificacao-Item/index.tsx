import * as S from './styles';
import { Notificacao } from 'hooks/use-notificacao';
import { Utils } from 'helpers/Utils';
import { CalendarClock } from '@styled-icons/fluentui-system-regular';

type Props = {
  notificacaoDetails: Notificacao;
};

const NotificacaoItem = ({ notificacaoDetails }: Props) => {
  const daysLimit = process.env.REACT_APP_DAYS_LIMIT_TO_COMPLETE_TASK;
  const days = daysLimit ? parseInt(daysLimit, 10) : 0;

  const { notificadoId, protocolo, nome, endereco, diasEmAtraso } =
    notificacaoDetails;
  const isLate = diasEmAtraso > days ? true : false;

  return (
    <S.NotificacaoContainer key={notificadoId}>
      <S.Body>
        <S.NotIcon />
        <S.Protocolo>{`Protocolo : ${protocolo}`}</S.Protocolo>
        <S.Nome>{Utils.titleCase(nome)}</S.Nome>
        <S.Endereco>{Utils.titleCase(endereco)}</S.Endereco>
        <S.DiasEmAtrasoContainer>
          <S.DiasEmAtrasoCalendar isLate={isLate} />
          <span>{` ${diasEmAtraso} dias em andamento`}</span>
        </S.DiasEmAtrasoContainer>
      </S.Body>
    </S.NotificacaoContainer>
  );
};

export default NotificacaoItem;
