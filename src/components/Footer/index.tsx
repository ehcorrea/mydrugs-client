import Heading from 'components/Heading';
import Logo from 'components/Logo';
import Link from 'next/link';
import * as S from './styles';

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading
          color="black"
          lineAdornment="bottom"
          lineColor="secondary"
          size="small"
        >
          Contact
        </Heading>
        <a href="mailto:ehcorrea@gmail.com">ehcorrea@gmail.com</a>
      </S.Column>
      <S.Column>
        <Heading
          color="black"
          lineAdornment="bottom"
          lineColor="secondary"
          size="small"
        >
          Follow us
        </Heading>
        <nav aria-labelledby="social media">
          <a
            href="https://www.instagram.com/ehcorrea.js"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/user/rmiliano/videos"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com/emilio.correa.3114"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>
      <S.Column>
        <Heading
          color="black"
          lineAdornment="bottom"
          lineColor="secondary"
          size="small"
        >
          Links
        </Heading>
        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>
      <S.Column aria-labelledby="footer-contact">
        <Heading
          color="black"
          lineAdornment="bottom"
          lineColor="secondary"
          size="small"
        >
          Repositories
        </Heading>
        <nav>
          <a
            href="https://github.com/ehcorrea/mydrugs-client"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Client
          </a>
        </nav>
      </S.Column>
    </S.Content>
    <S.Copyright>ehcorrea.js 2022</S.Copyright>
  </S.Wrapper>
);

export default Footer;
