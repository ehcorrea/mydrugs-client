import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder,
} from 'styled-icons/material-outlined';

import Button from 'components/Button';

import * as S from './styles';
import { DrugCardProps } from './types';
import { useMemo } from 'react';
import Ribbon from 'components/Ribbon';

const DrugCard = ({
  title,
  sourceData,
  img,
  price,
  promotionalPrice,
  favorite,
  onFav,
  ribbon,
}: DrugCardProps) => {
  const renderRibbon = useMemo(
    () => !!ribbon && <Ribbon {...ribbon}> {ribbon.content}</Ribbon>,
    [ribbon]
  );

  const renderFavorite = useMemo(
    () =>
      favorite ? (
        <Favorite aria-label={`Remove ${title} to Wishlist`} />
      ) : (
        <FavoriteBorder aria-label={`Add ${title} to Wishlist`} />
      ),
    [favorite, title]
  );

  const renderPromotionalPrice = useMemo(
    () => !!promotionalPrice && <S.Price isPromotional>{price}</S.Price>,
    [price, promotionalPrice]
  );

  return (
    <S.Wrapper>
      {renderRibbon}
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
      <S.Content>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{sourceData}</S.Developer>
        </S.Info>
        <S.FavButton role="button" onClick={onFav}>
          {renderFavorite}
        </S.FavButton>
        <S.BuyBox>
          {renderPromotionalPrice}
          <S.Price>{promotionalPrice || price}</S.Price>
          <Button
            icon={<AddShoppingCart />}
            size="small"
            aria-label={`Add ${title} to Shopping Cart`}
          />
        </S.BuyBox>
      </S.Content>
    </S.Wrapper>
  );
};

export default DrugCard;
