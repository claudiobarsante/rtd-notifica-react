import * as S from './styles';
import { Notificacao } from 'hooks/use-notificacao';
import { Utils } from 'helpers/Utils';
import { memo } from 'react';

type Props = {
  notificacaoDetails: Notificacao;
};

const NotificacaoCard = ({ notificacaoDetails }: Props) => {
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
/* -- React.memo by default does a shallow comparison of props and objects of props,
so when you are just passing a string, number, boolean as props there's no problem to use it.
If you want control over the comparison, you can also provide a custom comparison
function as the second argument to indicate an equality check function.
React.memo(Component, [areEqual(prevProps, nextProps)]);
Function must return true if prevProps and nextProps are equal.
You could check if the previous props and the actual props 
are equal using a javascript function Object.is() or '===' for reference equality*/
// -- When a React component should be wrapped in React.memo ?
/*
1- Pure functional component - your component is functional and given the sames props, always renders the same ouput
2 - Renders often - your component renders often
3- Re-renders with the same props - your component is usually provided with the same props during re-rendering
4 - Medium to big size - your component contains a decent amount of UI elements to reason props equality check 
*/

export const NotificacaoItem = memo(NotificacaoCard, (prevProps, nextProps) => {
  return Object.is(prevProps.notificacaoDetails, nextProps.notificacaoDetails);
});
