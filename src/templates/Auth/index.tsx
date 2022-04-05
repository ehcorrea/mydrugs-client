import Heading from 'components/Heading';
import Logo from 'components/Logo';
import Link from 'next/link';

import * as S from './styles';
import { AuthProps } from './types';

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>

        <div>
          <Heading size="huge">All your favorite drugs in one place</Heading>

          <S.Subtitle>
            <strong>MY DRUGS</strong> is the best and most complete drugs
            platform
          </S.Subtitle>
        </div>

        <S.Footer>ehcorrea 2022</S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <Link href="/">
          <a>
            <Logo color="black" size="large" />
          </a>
        </Link>

        <Heading color="black" lineAdornment="left" lineColor="secondary">
          {title}
        </Heading>

        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
);

export default Auth;
