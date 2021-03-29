import React from 'react';
import Button from '../Button/Button';

import { 
  CardContainer,
  NFTInfoContainer,
  NFTImageContainer,
  NFTInfo,
  NFTPrice,
  NFTInfoTitle,
  NFTInfoTotalLeft,
  NFTPriceTitle,
  NFTPriceInfo,
  TipButtonContainer
} from './Card.styles';

interface CardProps {
  title?: string;
  image?: string;
  totalLeft?: any;
  price?: any;
  showTip?: boolean;
};

const Card: React.FC<CardProps> = ({
  title, image, totalLeft, price,
  showTip
}) => {
  return (
    <CardContainer showTip={showTip}>
      <NFTImageContainer>
        <img 
          src={image}
          alt="nft"
          loading="lazy"
        />
      </NFTImageContainer>
      <NFTInfoContainer>
        <NFTInfo>
          <NFTInfoTitle>{title}</NFTInfoTitle>
          <NFTInfoTotalLeft>({totalLeft})</NFTInfoTotalLeft>
        </NFTInfo>
        <NFTPrice>
          <NFTPriceTitle>Price</NFTPriceTitle>
          <NFTPriceInfo>
            <i className="fab fa-ethereum"></i>
            <span>{price}</span>
          </NFTPriceInfo>
        </NFTPrice>
      </NFTInfoContainer>
      {
        showTip && (
          <TipButtonContainer>
            <Button
              outline
              label="Mint"
              height="30px"
              width="120px"
              onClick={() => {}}
            />
          </TipButtonContainer>
        )
      }
    </CardContainer>
  );
}

export default Card;
