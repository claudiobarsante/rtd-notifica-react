import * as S from './styles';
import { IconBaseProps } from 'react-icons';
type Props = {
  isActive: boolean;
  route: string;
  caption: string;
  icon: React.ComponentType<IconBaseProps>;
};
const MenuItem = ({ isActive, route, caption, icon: Icon }: Props) => {
  return (
    <S.Item isActive={isActive}>
      <div>
        <Icon />
        <S.StyledLink to={route}>
          <span>{caption}</span>
        </S.StyledLink>
      </div>
    </S.Item>
  );
};

export default MenuItem;
