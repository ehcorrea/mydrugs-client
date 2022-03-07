import 'match-media-mock';

import { screen } from '@testing-library/react';
import { BannerProps } from 'components/Banner/types';

import BannerSlider from '.';
import { renderWithTheme } from 'utils/tests/helpers';

const BANNER_SLIDER_ITEMS: BannerProps[] = [
  {
    img: 'https://picsum.photos/1042/580',
    title: 'LSD / MDMA / ECSTASY 1',
    subtitle: '<p>All drugs <strong>avaible</strong> now',
    buttonLabel: 'Buy now',
    buttonLink: '/drugs/drug_slug',
    ribbon: {
      children: 'Bestselling',
    },
  },
  {
    img: 'https://picsum.photos/1042/580',
    title: 'LSD / MDMA / ECSTASY 2',
    subtitle: '<p>All drugs <strong>avaible</strong> now',
    buttonLabel: 'Buy now',
    buttonLink: '/drugs/drug_slug',
  },
];

describe('<BannerSlider />', () => {
  it('should render vertical slider', () => {
    const { container } = renderWithTheme(
      <BannerSlider items={BANNER_SLIDER_ITEMS} />
    );
    expect(container.querySelector('.slick-vertical')).toBeInTheDocument();
  });

  it('should render the dots', () => {
    const { container } = renderWithTheme(
      <BannerSlider items={BANNER_SLIDER_ITEMS} />
    );
    expect(container.querySelectorAll('.slick-dots li')).toHaveLength(
      BANNER_SLIDER_ITEMS.length
    );
  });

  it('should render with one active item', () => {
    const { container } = renderWithTheme(
      <BannerSlider items={BANNER_SLIDER_ITEMS} />
    );
    expect(container.querySelectorAll('.slick-slide')).toHaveLength(
      BANNER_SLIDER_ITEMS.length
    );
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1);
    expect(
      screen.getByRole('heading', {
        name: 'LSD / MDMA / ECSTASY 1',
        hidden: false,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: 'LSD / MDMA / ECSTASY 2',
        hidden: true,
      })
    ).toBeInTheDocument();
  });
});
