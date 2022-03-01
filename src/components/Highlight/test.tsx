import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Highlight from '.';
import * as S from './styles';
import { HighlightProps } from './types';

const HIGHLIGHT_PROPS: HighlightProps = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  backgroundImage: '/img/mdma-img.jpg',
  button: {
    label: 'Buy now',
    link: '/lsd',
  },
};

describe('<Highlight />', () => {
  it('should render the headings and button', () => {
    renderWithTheme(<Highlight {...HIGHLIGHT_PROPS} />);
    expect(
      screen.getByRole('heading', { name: /heading 1/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /heading 2/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument();
  });

  it('should render background image', () => {
    const { container } = renderWithTheme(<Highlight {...HIGHLIGHT_PROPS} />);
    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${HIGHLIGHT_PROPS.backgroundImage})`,
    });
  });

  it('should render float image', () => {
    renderWithTheme(
      <Highlight floatImage="/img/mdma-float.png" {...HIGHLIGHT_PROPS} />
    );
    expect(
      screen.getByRole('img', { name: HIGHLIGHT_PROPS.title })
    ).toHaveAttribute('src', '/img/mdma-float.png');
  });

  it('should render align right as default', () => {
    const { container } = renderWithTheme(<Highlight {...HIGHLIGHT_PROPS} />);
    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'"
    );
    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`,
    });
  });

  it('should render align left', () => {
    const { container } = renderWithTheme(
      <Highlight alignment="left" {...HIGHLIGHT_PROPS} />
    );
    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'"
    );
    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`,
    });
  });
});
