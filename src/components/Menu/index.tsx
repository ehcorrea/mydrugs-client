import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart';
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

import Logo from 'components/Logo';
import * as S from './styles';
import { useMemo, useState } from 'react';
import Button from 'components/Button';
import { MenuProps } from './types';
import MediaMatch from 'components/MediaMatch';
import Link from 'next/link';

const Menu = ({ userName }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => setIsOpen((prevState) => !prevState);

  const renderMenuItensLogin = useMemo(
    () =>
      !!userName && (
        <>
          <S.MenuLink href="#">My account</S.MenuLink>
          <S.MenuLink href="#">Wishlist</S.MenuLink>
        </>
      ),
    [userName]
  );

  const renderRegisterBox = useMemo(
    () =>
      !userName && (
        <S.RegisterBox>
          <Link href="/sign-in" passHref>
            <Button as="a">Sing in</Button>
          </Link>
          <span>or</span>
          <Link href="/sign-up">
            <S.CreateAccount title="sing in">Sing up</S.CreateAccount>
          </Link>
        </S.RegisterBox>
      ),
    [userName]
  );

  const renderLoginButton = useMemo(
    () =>
      !userName && (
        <MediaMatch greaterThan="medium">
          <Link href="/sign-in" passHref>
            <Button as="a">Sign in</Button>
          </Link>
        </MediaMatch>
      ),
    [userName]
  );

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={handleOpenMenu}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Logo hideOnMobile size="large" />
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGrounp>
        <S.IconWrapper>
          <SearchIcon aria-label="search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon aria-label="Open Shopping Cart" />
        </S.IconWrapper>
        {renderLoginButton}
      </S.MenuGrounp>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={handleOpenMenu} />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
          {renderMenuItensLogin}
        </S.MenuNav>
        {renderRegisterBox}
      </S.MenuFull>
    </S.Wrapper>
  );
};

export default Menu;
