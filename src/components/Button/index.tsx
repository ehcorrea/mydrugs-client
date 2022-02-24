import * as S from './styles';
import { ButtonProps } from './types';

const Button = ({ children, size = 'medium', icon, ...props }: ButtonProps) => (
  <S.Wrapper size={size} hasIcon={!!icon} {...props}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default Button;
