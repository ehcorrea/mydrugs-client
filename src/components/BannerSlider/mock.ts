import { BannerProps } from 'components/Banner/types';

const BANNER_SLIDER_MOCK: BannerProps[] = [
  {
    img: '/img/banner-1.jpg',
    title: 'A project inspired by',
    subtitle: '<p> How to Sell Drugs Online<strong>(fast)</strong> </p>',
    buttonLabel: 'See now',
    buttonLink: 'https://www.netflix.com/watch/80218448?source=35',
    ribbon: {
      children: 'Inspiration',
    },
  },
  {
    img: '/img/banner-2.jpg',
    title: 'LSD / MDMA / ECSTASY',
    subtitle: '<p>The best <strong>variety</strong> of drugs</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/drugs/drug_slug',
  },
  {
    img: '/img/banner-3.jpg',
    title: 'Drugs with purity',
    subtitle: '<p>The best <strong>chemical solutions</strong> on the market',
    buttonLabel: 'Buy now',
    buttonLink: '/drugs/drug_slug',
  },
];

export default BANNER_SLIDER_MOCK;
