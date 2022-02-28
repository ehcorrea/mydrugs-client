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

  it('should render a Ribbon', () => {
    renderWithTheme(
      <Banner
        {...BANNER_PROPS}
        ribbon={{
          children: 'My Ribbon',
          backgroundColor: 'secondary',
          size: 'small',
        }}
      />
    );

    const ribbon = screen.getByText(/My Ribbon/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem',
      backgroundColor: '#3CD3C1',
      color: '#FAFAFA',
    });
  });
});
