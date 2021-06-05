import * as S from './styles';
import { useLocation } from 'react-router-dom';
import { FiMapPin } from 'react-icons/fi';
import {
  AiOutlineLineChart,
  AiOutlineHome,
  AiOutlineFileDone
} from 'react-icons/ai';
import { BiExit } from 'react-icons/bi';

import MenuItem from '../Menu-Item';

const NavBarMenu = () => {
  let title = '';
  let { pathname } = useLocation();

  if (pathname === '/overview') {
    title = 'Notificações';
  }

  if (pathname === '/distribution') {
    title = 'Distribuição';
  }

  return (
    <S.Header>
      <h1>{title}</h1>
      <S.MenuContainer>
        <S.Menu>
          <MenuItem
            isActive={pathname === '/overview'}
            icon={AiOutlineHome}
            route="/"
            caption="Página inicial"
          />
          <MenuItem
            isActive={pathname === '/charts'}
            icon={AiOutlineLineChart}
            route="/charts"
            caption="Gráficos"
          />
          <MenuItem
            isActive={pathname === '/distribution'}
            icon={FiMapPin}
            route="/distribution"
            caption="Distribuição"
          />
          <MenuItem
            isActive={pathname === '/about'}
            icon={AiOutlineFileDone}
            route="/about"
            caption="Sobre"
          />
          <MenuItem
            isActive={pathname === '/logout'}
            icon={BiExit}
            route="/logout"
            caption="Log out"
          />
        </S.Menu>
      </S.MenuContainer>
    </S.Header>
  );
};

export default NavBarMenu;
