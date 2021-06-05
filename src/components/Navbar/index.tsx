import * as S from './styles';

type Props = {
  currentPage: string;
};
export default function Navbar({ currentPage: page }: Props) {
  //const [link, setLink] = useState('');
  let title = '';

  if (page.includes('overview')) {
    title = 'Notificações';
  }

  if (page.includes('distribution')) {
    title = 'Distribuição';
  }

  return (
    <S.Header>
      <h1>{title}</h1>
      <S.MenuContainer>
        <S.Menu>
          <S.MenuItem isActive={title === 'Notificações'}>
            <div>
              <S.HomeIcon />
              <S.StyledLink to="/">
                <span>Página inicial</span>
              </S.StyledLink>
            </div>
          </S.MenuItem>

          <S.MenuItem isActive={title === '/charts'}>
            <div>
              <S.ChartIcon />
              <S.StyledLink to="/charts">
                <span>Gráficos</span>
              </S.StyledLink>
            </div>
          </S.MenuItem>
          <S.MenuItem isActive={title === 'Distribuição'}>
            <div>
              <S.MapIcon />
              <S.StyledLink to="/distribution">
                <span>Distribuição</span>
              </S.StyledLink>
            </div>
          </S.MenuItem>
          <S.MenuItem isActive={title === '/about'}>
            <div>
              <S.AboutIcon />
              <S.StyledLink to="/about">
                <span>Sobre</span>
              </S.StyledLink>
            </div>
          </S.MenuItem>
          <S.MenuItem isActive={title === '/logout'}>
            <div>
              <S.ExitIcon />
              <S.StyledLink to="/distribution">
                <span>Log out</span>
              </S.StyledLink>
            </div>
          </S.MenuItem>
        </S.Menu>
      </S.MenuContainer>
    </S.Header>
  );
}
