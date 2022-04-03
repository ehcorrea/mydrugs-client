import { useMemo, useState } from 'react';
import * as S from './styles';
import { TextFieldProps } from './types';

const TextField = ({
  labelOptions,
  initialValue = '',
  onInput,
  iconOptions,
  error,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const renderLabel = useMemo(() => {
    const color = labelOptions?.color || 'white';
    const labelFor = labelOptions?.labelFor || '';

    return (
      labelOptions && (
        <S.Label htmlFor={labelFor} color={color}>
          {labelOptions?.text}
        </S.Label>
      )
    );
  }, [labelOptions]);

  const renderIcon = useMemo(() => {
    return !!iconOptions && <S.Icon>{iconOptions.element}</S.Icon>;
  }, [iconOptions]);

  const renderError = useMemo(
    () => !!error && <S.Error>{error}</S.Error>,
    [error]
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    !!onInput && onInput(newValue);
  };

  return (
    <S.Wrapper disabled={props.disabled} hasError={!!error}>
      {renderLabel}
      <S.InputWrapper iconAlignment={iconOptions?.alignment || 'left'}>
        {renderIcon}
        <S.Input type="text" onChange={onChange} value={value} {...props} />
      </S.InputWrapper>
      {renderError}
    </S.Wrapper>
  );
};

export default TextField;
