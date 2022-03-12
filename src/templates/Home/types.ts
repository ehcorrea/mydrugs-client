import { BannerProps } from 'components/Banner/types';
import { DrugCardProps } from 'components/DrugCard/types';
import { HighlightProps } from 'components/Highlight/types';

export type HomeTemplateProps = {
  banners: BannerProps[];
  mostPopularDrugs: DrugCardProps[];
  mostPopularHighlight: HighlightProps;
  newDrugs: DrugCardProps[];
  upcommingDrugs: DrugCardProps[];
  upcommingHighlight: HighlightProps;
  upcommingMoreDrugs: DrugCardProps[];
};
