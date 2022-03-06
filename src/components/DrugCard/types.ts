import { RibbonProps } from 'components/Ribbon/types';

export type PriceProps = {
  isPromotional?: boolean;
};

export type DrugCardRibbonProps = Omit<RibbonProps, 'children'> & {
  content: string;
};

export type DrugCardProps = {
  img: string;
  price: string;
  promotionalPrice?: string;
  sourceData: string;
  title: string;
  favorite?: boolean;
  onFav?: () => void;
  ribbon?: DrugCardRibbonProps;
};
