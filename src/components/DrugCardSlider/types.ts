import { DrugCardProps } from 'components/DrugCard/types';

export type WrapperProps = Pick<DrugCardSliderProps, 'arrowColor'>;

export type DrugCardSliderProps = {
  items: DrugCardProps[];
  arrowColor?: 'white' | 'black';
};
