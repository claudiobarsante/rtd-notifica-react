import * as S from './styles';
import sessionExpiredImg from 'assets/session-expired.jpg';

type Props = {
  message: string;
  onButtonClick: () => void;
};
const SessionExpired = ({ message, onButtonClick }: Props) => {
  return (
    <S.StyledModal isOpen={true}>
      <S.Body>
        <h2>Sessão expirada</h2>
        <h4>{message}</h4>
        <img
          src={sessionExpiredImg}
          alt="Imagem em azul com um ícnoe indicando para recarregar a página"
        />
        <button onClick={() => onButtonClick()}>Fazer login novamente</button>
      </S.Body>
    </S.StyledModal>
  );
};

export default SessionExpired;
