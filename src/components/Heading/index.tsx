import * as S from './styles';
import { HeadingProps } from './types';

const Heading = ({ children, color = 'white', ...props }: HeadingProps) => (
  <S.Wrapper color={color} {...props}>
    {children}
  </S.Wrapper>
);

export default Heading;
