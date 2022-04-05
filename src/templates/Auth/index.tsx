import Heading from 'components/Heading';
import Logo from 'components/Logo';
import * as S from './styles';
import { AuthProps } from './types';

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Logo />

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
        <Logo color="black" size="large" />

        <Heading color="black" lineAdornment="left" lineColor="secondary">
          {title}
        </Heading>

        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
);

export default Auth;
