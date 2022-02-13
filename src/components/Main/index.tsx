import { MainProps } from './types';
import * as S from './styles';

const defaultTexts = {
  title: 'Hi, I am Emilio. A Web Developer and this is my Boilerplate',
  description:
    'This Boilerplate was created with Next.JS, TypeScript, Jest, Testing Library and Styled Components',
};

const Main = ({
  title = defaultTexts.title,
  description = defaultTexts.description,
}: MainProps) => (
  <S.Wrapper>
    <S.Header>
      <S.Logo src="vercel.svg" alt="Logo written vessel" />
    </S.Header>

    <S.Container>
      <S.CentralCover
        src="img/main_cover.jpg"
        alt="Emilio Henrique Corrêa profile photo"
      />
      <S.InfosContainer>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.LinkButton href="https://linktr.ee/ehcorrea" target="_blank">
          links
        </S.LinkButton>
      </S.InfosContainer>
    </S.Container>
  </S.Wrapper>
);

export default Main;
