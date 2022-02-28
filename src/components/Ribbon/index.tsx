import * as S from './styles';
import { RibbonProps } from './types';

const Ribbon = ({
  children,
  backgroundColor = 'primary',
  color = 'white',
  size = 'normal',
}: RibbonProps) => (
  <S.Wrapper backgroundColor={backgroundColor} color={color} size={size}>
    {children}
  </S.Wrapper>
);

export default Ribbon;
