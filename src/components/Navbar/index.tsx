import * as S from './styles';

type Props = {
  currentPage: string;
};
export default function Navbar({ currentPage: page }: Props) {
  let title = '';

  if (page.includes('overview')) {
    title = 'Notificações';
  }
  return (
    <S.Container>
      <h1>{title}</h1>
      <S.MenuContainer>
        <S.Menu>
          <li>
            <button>Sobre</button>
          </li>
          <li>
            <button>Gráficos</button>
          </li>
          <li>
            <button>Distribuição</button>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </S.Menu>
      </S.MenuContainer>
    </S.Container>
  );
}
