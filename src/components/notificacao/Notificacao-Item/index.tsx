import * as S from './styles';
import { Notificacao } from 'hooks/use-notificacao';
import { Utils } from 'helpers/Utils';
import { memo } from 'react';

type Props = {
  notificacaoDetails: Notificacao;
};

const NotificacaoItemComponent = ({ notificacaoDetails }: Props) => {
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

// -- about memo
/* -- React.memo uses a shallow comparison {} === {} false, so when you are just passing a
string, number, boolean as props there's no problem to use it.
By default it will only shallowly compare complex objects in the props object. 
If you want control over the comparison, you can also provide a custom comparison
function as the second argument to indicate an equality check function. You could check if the previous props and the actual props 
are equal using a javascript function Object.is() or '===' for reference equality*/

export const NotificacaoItem = memo(
  NotificacaoItemComponent,
  (prevProps, nextProps) => {
    return Object.is(
      prevProps.notificacaoDetails,
      nextProps.notificacaoDetails
    );
  }
);
