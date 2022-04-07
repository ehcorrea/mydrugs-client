import BannerSlider from 'components/BannerSlider';
import Container from 'components/Container';
import Footer from 'components/Footer';
import Menu from 'components/Menu';
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
  <section>
    <Container>
      <Menu />
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

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
);

export default Home;
