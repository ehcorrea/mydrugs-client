import BannerSlider from 'components/BannerSlider';
import Container from 'components/Container';
import DrugCardSlider from 'components/DrugCardSlider';
import Footer from 'components/Footer';
import Heading from 'components/Heading';
import Highlight from 'components/Highlight';
import Menu from 'components/Menu';

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
      <Container>
        <Heading lineAdornment="left" lineColor="secondary">
          News
        </Heading>

        <DrugCardSlider items={newDrugs} />
      </Container>
    </S.SectionNews>

    <Container>
      <S.SectionMostPopular>
        <Heading lineAdornment="left" lineColor="secondary">
          Most Popular
        </Heading>

        <Highlight {...mostPopularHighlight} />
        <DrugCardSlider items={mostPopularDrugs} arrowColor="white" />
      </S.SectionMostPopular>

      <S.SectionUpcoming>
        <Heading lineAdornment="left" lineColor="secondary">
          Upcomming
        </Heading>

        <DrugCardSlider items={upcommingMoreDrugs} arrowColor="white" />
        <Highlight {...upcommingHighlight} />
        <DrugCardSlider items={upcommingDrugs} arrowColor="white" />
      </S.SectionUpcoming>
    </Container>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
);

export default Home;
