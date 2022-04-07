import { DrugCardProps } from 'components/DrugCard/types';
import { HighlightProps } from 'components/Highlight/types';

export type ShowcaseProps = {
  title?: string;
  highlight?: HighlightProps;
  drugs?: DrugCardProps[];
};
