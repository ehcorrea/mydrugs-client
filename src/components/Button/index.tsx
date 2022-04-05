import { useMemo, forwardRef } from 'react';
import * as S from './styles';
import { ButtonProps, WrapperProps } from './types';

const Button: React.ForwardRefRenderFunction<WrapperProps, ButtonProps> = (
  { children, size = 'medium', icon, ...props },
  ref
) => {
  const renderChildren = useMemo(
    () => !!children && <span>{children}</span>,
    [children]
  );

  return (
    <S.Wrapper size={size} hasIcon={!!icon} ref={ref} {...props}>
      {icon}
      {renderChildren}
    </S.Wrapper>
  );
};

export default forwardRef(Button);
