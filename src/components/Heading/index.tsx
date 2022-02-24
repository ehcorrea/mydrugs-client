import * as S from './styles';
import { HeadingProps } from './types';

const Heading = ({
  children,
  color = 'white',
  size = 'medium',
  lineColor = 'primary',
  ...props
}: HeadingProps) => (
  <S.Wrapper color={color} size={size} lineColor={lineColor} {...props}>
    {children}
  </S.Wrapper>
);

export default Heading;
