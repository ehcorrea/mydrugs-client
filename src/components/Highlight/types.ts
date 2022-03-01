export type WrapperProps = Pick<
  HighlightProps,
  'backgroundImage' | 'alignment'
>;

type HightlightButtonProps = {
  label: string;
  link: string;
};

export type HighlightProps = {
  alignment?: 'left' | 'right';
  backgroundImage: string;
  button: HightlightButtonProps;
  floatImage?: string;
  subtitle: string;
  title: string;
};
