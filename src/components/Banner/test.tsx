import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Banner from '.';
import { BannerProps } from './types';

const BANNER_PROPS: BannerProps = {
  title: 'Banner title',
  subtitle: 'Banner subtitle',
  img: '/banner-image',
  buttonLabel: 'Banner Button',
  buttonLink: '/banner-button-link',
};

describe('<Banner />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Banner {...BANNER_PROPS} />);
    expect(
      screen.getByRole('heading', { name: /banner title/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /banner subtitle/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: /banner title/i })).toHaveAttribute(
      'src',
      '/banner-image'
    );
  });
});
