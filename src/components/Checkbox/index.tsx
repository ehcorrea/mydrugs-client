import { useMemo, useState } from 'react';
import { Colors } from 'types/colors';
import * as S from './styles';
import { CheckboxProps } from './types';

const Checkbox = ({
  labelOptions,
  onCheck,
  isChecked,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked);

  const onChange = () => {
    setChecked((prevChecked) => {
      const status = !prevChecked;
      onCheck?.(status);
      return status;
    });
  };

  const renderLabel = useMemo(() => {
    const color: Colors = labelOptions?.color || 'white';
    const labelFor = labelOptions?.labelFor || '';

    return {
      component: labelOptions && (
        <S.Label htmlFor={labelFor} color={color}>
          {labelOptions?.text}
        </S.Label>
      ),
      labelFor,
    };
  }, [labelOptions]);

  return (
    <S.Wrapper>
      <S.Input
        id={renderLabel.labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        {...props}
      />
      {renderLabel.component}
    </S.Wrapper>
  );
};

export default Checkbox;
