import Base from 'templates/Base';

import BannerSlider from 'components/BannerSlider';
import Container from 'components/Container';
import Showcase from 'components/Showcase';

import * as S from './styles';
import { HomeTemplateProps } from './types';

const Home = ({
  banners,
  mostPopularDrugs,
  mostPopularHighlight,
  newDrugs,
  upcommingDrugs,
  upcommingHighlight,
  upcommingMoreDrugs,
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title="News" drugs={newDrugs} />
    </S.SectionNews>

    <S.SectionMostPopular>
      <Showcase
        title="Most Popular"
        drugs={mostPopularDrugs}
        highlight={mostPopularHighlight}
      />
    </S.SectionMostPopular>

    <S.SectionUpcoming>
      <Showcase title="Upcomming" drugs={upcommingDrugs} />
      <Showcase drugs={upcommingMoreDrugs} highlight={upcommingHighlight} />
    </S.SectionUpcoming>
  </Base>
);

export default Home;
