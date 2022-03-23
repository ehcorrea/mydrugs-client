import { useMemo } from 'react';
import { Colors } from 'types/colors';
import * as S from './styles';
import { RadioProps } from './types';

const Radio = ({ labelOptions, onCheck, value, ...props }: RadioProps) => {
  const onChange = () => {
    onCheck?.(value);
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
        type="radio"
        value={value}
        onChange={onChange}
        {...props}
      />
      {renderLabel.component}
    </S.Wrapper>
  );
};

export default Radio;
