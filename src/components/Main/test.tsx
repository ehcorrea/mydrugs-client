import { render, screen } from '@testing-library/react';
import Main from '.';

describe('<Main/>', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = render(<Main />).container;
  });

  it('should render the Logo', () => {
    expect(screen.getByAltText(/Logo written vessel/i));
  });

  it('should render the Cover Photo', () => {
    expect(screen.getByAltText(/Emilio Henrique Corrêa profile photo/i));
  });

  it('should render the Title', () => {
    expect(
      screen.getByRole('heading', {
        name: /Hi, I am Emilio. A Web Developer and this is my Boilerplate/i,
      })
    );
  });

  it('should render the Description', () => {
    expect(
      screen.getByRole('heading', {
        name: /This Boilerplate was created with Next.JS, TypeScript, Jest, Testing Library and Styled Components/i,
      })
    );
  });

  it('should render the Link Button', () => {
    expect(
      screen.getByRole('link', {
        name: /links/i,
      })
    );
  });

  it('should render the colorsa correctly', () => {
    expect(container.firstChild).toHaveStyle({
      'background-color': '#202020',
      height: '100%',
    });
  });
});
