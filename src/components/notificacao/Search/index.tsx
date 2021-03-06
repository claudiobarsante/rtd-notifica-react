import * as S from './styles';
type Props = {
  text: string;
  onHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const NotificacaoSearch = ({ text, onHandleChange }: Props) => {
  return (
    <S.Container>
      <S.SearchIcon />
      <input
        type="search"
        placeholder="Pesquise aqui..."
        onChange={onHandleChange}
        value={text}
        maxLength={50}
      />
    </S.Container>
  );
};

export default NotificacaoSearch;
