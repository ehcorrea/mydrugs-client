import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos';

import DrugCard from 'components/DrugCard';
import Slider from 'components/Slider';
import { SliderSettings } from 'components/Slider/types';
import * as S from './styles';
import { DrugCardSliderProps } from './types';

const DRUG_CARD_SLIDER_SETTINGS: SliderSettings = {
  arrows: true,
  nextArrow: <ArrowRight aria-label="next drugs" />,
  prevArrow: <ArrowLeft aria-label="previous drugs" />,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
      },
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
      },
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1,
      },
    },
  ],
};

const DrugCardSlider = ({
  items,
  arrowColor = 'black',
}: DrugCardSliderProps) => (
  <S.Wrapper arrowColor={arrowColor}>
    <Slider settings={DRUG_CARD_SLIDER_SETTINGS}>
      {items.map((item) => (
        <DrugCard key={item.title} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
);

export default DrugCardSlider;
