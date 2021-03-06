import Container from 'components/Container';
import Footer from 'components/Footer';
import Menu from 'components/Menu';

import * as S from './styles';
import { BaseProps } from './types';

const Base = ({ children }: BaseProps) => (
  <section>
    <Container>
      <Menu />
    </Container>

    {children}

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
);

export default Base;
