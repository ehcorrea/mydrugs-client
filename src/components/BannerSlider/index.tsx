import Banner from 'components/Banner';
import Slider from 'components/Slider';
import { SliderSettings } from 'components/Slider/types';
import * as S from './styles';
import { BannerSliderProps } from './types';

const SETTINGS: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false,
      },
    },
  ],
};

const BannerSlider = ({ items }: BannerSliderProps) => (
  <S.Wrapper>
    <Slider settings={SETTINGS}>
      {items.map((item) => (
        <Banner key={item.title} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
);

export default BannerSlider;
