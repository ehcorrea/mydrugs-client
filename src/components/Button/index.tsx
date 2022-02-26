import { useMemo } from 'react';
import * as S from './styles';
import { ButtonProps } from './types';

const Button = ({ children, size = 'medium', icon, ...props }: ButtonProps) => {
  const renderChildren = useMemo(
    () => !!children && <span>{children}</span>,
    [children]
  );

  return (
    <S.Wrapper size={size} hasIcon={!!icon} {...props}>
      {icon}
      {renderChildren}
    </S.Wrapper>
  );
};

export default Button;
