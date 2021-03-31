import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import { getGalleryPriceByKind, getRemainingNftByKind } from '../../../store/actions/actions';

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
import { MAX_GALLERY_ITEM_PER_NFT } from '../../../constants/mint';

interface CardProps {
  kind?: number;
  title?: string;
  image?: string;
  showTip?: boolean;
  price?: string;
  isGallery?: boolean;
  onClick?: (etherPrice?: string) => void;
};

const Card: React.FC<CardProps> = ({
  title, image, kind,
  showTip, price, isGallery,
  onClick
}) => {

  const [etherPrice, setPrice] = useState<string>(null);
  const [nftKindsNumbers, setNftKindsNumbers] = useState<string>(null);

  useEffect(() => {
    if (!kind) return;
    getPrice(kind);
    getNftKindsNumbers(kind);
  }, [kind]);

  const getPrice = async (kind: number): Promise<void> => {
    const price = await getGalleryPriceByKind(kind);
    const priceEther = window?.web3?.utils?.fromWei(price.toString(), 'ether')
    setPrice(priceEther);
  }

  const getNftKindsNumbers = async (kind: number): Promise<void> => {
    const result = await getRemainingNftByKind(kind);
    setNftKindsNumbers(result.toString());
  }

  return (
    <CardContainer showTip={showTip} onClick={() => onClick && onClick(etherPrice)}>
      <NFTImageContainer className="image-container">
        <img 
          src={image}
          alt="nft"
          loading="lazy"
          className="image"
        />
      </NFTImageContainer>
      <NFTInfoContainer>
        <NFTInfo>
          <NFTInfoTitle>{title}</NFTInfoTitle>
          {isGallery && (
            <NFTInfoTotalLeft>({MAX_GALLERY_ITEM_PER_NFT-parseInt(nftKindsNumbers)} out of {MAX_GALLERY_ITEM_PER_NFT})</NFTInfoTotalLeft>
          )}
        </NFTInfo>
        <NFTPrice>
          <NFTPriceTitle>Price</NFTPriceTitle>
          <NFTPriceInfo>
            <i className="fab fa-ethereum"></i>
            {
              price ? (
                <span>{price}</span>
              ) : (
                <span>{etherPrice || 'Loading...'}</span>
              )
            }
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
