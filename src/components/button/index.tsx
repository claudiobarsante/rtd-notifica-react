import { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

//could use type rather than interface because it's not overwriting or extending
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...rest }: Props) => <S.Container {...rest}>{children}</S.Container>;

export default Button;
