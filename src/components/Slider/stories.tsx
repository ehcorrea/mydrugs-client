import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import { SliderProps, SliderSettings } from './types';
import Slider from '.';

export default {
  title: 'SLIDER/Slider',
  component: Slider,
} as Meta;

const VERTICAL_HORIZONTAL: SliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`;

export const Horizontal: Story<SliderProps> = () => (
  <Slider settings={VERTICAL_HORIZONTAL}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
  </Slider>
);

const VERTICAL_SETTINGS: SliderSettings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const Vertical: Story<SliderProps> = () => (
  <Slider settings={VERTICAL_SETTINGS}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
  </Slider>
);
