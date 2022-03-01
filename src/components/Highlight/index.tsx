import Button from 'components/Button';
import { useMemo } from 'react';
import * as S from './styles';
import { HighlightProps } from './types';

const Highlight = ({
  title,
  subtitle,
  button,
  backgroundImage,
  floatImage,
  alignment = 'right',
}: HighlightProps) => {
  const renderFloatImage = useMemo(
    () => !!floatImage && <S.FloatImage src={floatImage} alt={title} />,
    [floatImage, title]
  );

  return (
    <S.Wrapper backgroundImage={backgroundImage} alignment={alignment}>
      {renderFloatImage}
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <Button as="a" href={button.link}>
          {button.label}
        </Button>
      </S.Content>
    </S.Wrapper>
  );
};

export default Highlight;
