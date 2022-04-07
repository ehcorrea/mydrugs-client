import DrugCardSlider from 'components/DrugCardSlider';
import Heading from 'components/Heading';
import Highlight from 'components/Highlight';
import { useMemo } from 'react';

import * as S from './styles';
import { ShowcaseProps } from './types';

const Showcase = ({ title, highlight, drugs }: ShowcaseProps) => {
  const renderTitle = useMemo(() => {
    return (
      !!title && (
        <Heading lineAdornment="left" lineColor="secondary">
          {title}
        </Heading>
      )
    );
  }, [title]);

  const renderHiglight = useMemo(() => {
    return !!highlight && <Highlight {...highlight} />;
  }, [highlight]);

  const renderDrugs = useMemo(() => {
    return !!drugs && <DrugCardSlider items={drugs} arrowColor="white" />;
  }, [drugs]);

  return (
    <S.Wrapper>
      {renderTitle}
      {renderHiglight}
      {renderDrugs}
    </S.Wrapper>
  );
};

export default Showcase;
