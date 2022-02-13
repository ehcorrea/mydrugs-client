import styled from 'styled-components';

export const Wrapper = styled.main`
  background-color: #202020;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
`;

export const Header = styled.div`
  align-items: center;
  background: rgba(50, 50, 50, 0.7);
  display: flex;
  height: 72px;
  padding: 15px 24px;
  width: 100%;
`;

export const Logo = styled.img`
  filter: contrast(0.1);
  width: 120px;
`;

export const Container = styled.div`
  max-width: 1440px;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: -webkit-fill-available;
  padding: 0 24px;
  align-content: center;
  justify-content: space-evenly;
  margin: 64px 0 0 0;

  @media (min-width: 762px) {
    flex-direction: row-reverse;
    align-items: flex-start;
    margin: 120px 0 0 0;
    padding: 0;
  }
`;

export const CentralCover = styled.img`
  border-radius: 50%;
  max-width: 240px;
`;

export const InfosContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: -webkit-fill-available;
  align-content: center;
  justify-content: space-evenly;

  @media (min-width: 762px) {
    justify-content: flex-start;
    align-items: baseline;
    max-width: 400px;
  }
`;

export const Title = styled.h1`
  color: #dedede;
  font-size: 30px;
  font-style: normal;
  font-weight: bold;
  letter-spacing: -0.5px;
  line-height: 40px;
  text-align: center;

  @media (min-width: 762px) {
    text-align: left;
  }
`;

export const Description = styled.h2`
  color: #959595;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.5px;
  line-height: 28px;
  text-align: center;

  @media (min-width: 762px) {
    margin: 24px 0 0 0;
    text-align: left;
  }
`;

export const LinkButton = styled.a`
  align-items: center;
  background: #9d9d9d;
  border-radius: 4px;
  color: #ffffff;
  display: flex;
  font-size: 18px;
  font-style: normal;
  height: 57px;
  justify-content: center;
  line-height: 25px;
  padding: 16px 48px;
  width: 100%;
  max-width: 270px;
  text-decoration: none;

  @media (min-width: 762px) {
    margin: 88px 0 0 0;
  }
`;
