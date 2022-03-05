import SlickSlider from 'react-slick';

import * as S from './styles';
import { SliderProps } from './types';

const Slider = ({ children, settings }: SliderProps) => (
  <S.Wrapper>
    <SlickSlider {...settings}>{children}</SlickSlider>
  </S.Wrapper>
);

export default Slider;
