import React, { useState } from 'react';

import Layout from '../../components/ui/Layout/Layout';
import Modal from '../../components/ui/Modal/Modal';
import Button from '../../components/ui/Button/Button';
import Card from '../../components/ui/Card/Card';
import {
  FunZoneContainer,
  FunZoneInputContainer,
  FunZoneInput,
  FunZoneItemContainer,
  FunZoneModalLabel
} from './FunZone.styles';
import { ButtonContainer, FeesLabel, LoadingText } from '../../pages/Gallery/Gallery.styles';
import { generateNFT } from '../../utils/utils';
import { INFT } from '../../entities/nft.entity';
import { useStore } from '../../store/provider';
import { NFT_FUN_ZONE_QTY } from '../../../nfts-quantities';

interface FunZone {};

const FunZone: React.FC<FunZone> = () => {

  const { ui: { contractLoaded } } = useStore();
  const [selectedNFT, setSelectedNFT] = useState<INFT>(null);
  const [tipArtist, setTipArtist] = useState<boolean>(false);
  const [tipValue, setTipValue] = useState<number | string>(0);

  const handleCardClick = (event: EventTarget, nft: INFT): void => {
    const className = (event as HTMLElement).className;
    if (!className.includes('image')) return setTipArtist(true);
    setSelectedNFT(nft);
  }

  if (!contractLoaded) {
    return <Layout>
      <LoadingText>Loading...</LoadingText>
    </Layout>
  }

  return (
    <Layout>
      <FunZoneContainer>

        {
           generateNFT(NFT_FUN_ZONE_QTY).map((nft, idx) => (
            <FunZoneItemContainer
              key={idx}
              onClick={e => handleCardClick(e.target, nft)}
            >
              <Card
                showTip
                image={nft.fullImage}
                title={nft.name}
                price={nft.price}
              />
            </FunZoneItemContainer>
          ))
        }
        {tipArtist && (
          <Modal
            title="Mint"
            height="350px"
            onClose={() => setTipArtist(false)}
          >

          <FunZoneModalLabel>Mint cost</FunZoneModalLabel>
          <FunZoneInputContainer>
            <i className="fab fa-ethereum"></i>
            <FunZoneInput disabled value="0.01 ETH" />
          </FunZoneInputContainer>
          <FunZoneModalLabel>Tip to the Artist</FunZoneModalLabel>
          <FunZoneInputContainer>
            <i className="fab fa-ethereum"></i>
            <FunZoneInput value={tipValue} onChange={e => setTipValue(e.target.value)} />
            <span>ETH</span>
          </FunZoneInputContainer>
          <ButtonContainer>
            <Button
              outline
              dark
              label="Mint Now"
              height="50px"
              width="150px"
              onClick={() => setTipArtist(false)}
            />
            <FeesLabel>The highest tipper (cumulatively) will receive a rare dick NFT after the collection minting finishes</FeesLabel>
          </ButtonContainer>
          </Modal>
        )}
        {selectedNFT && (
          <Modal
            width="800px"
            height="auto"
            title={selectedNFT.name}
            onClose={() => setSelectedNFT(null)}
          >
            <img 
              src={selectedNFT.preview}
              style={{
                width: '80%'
              }}
            />
          </Modal>
        )}
      </FunZoneContainer>
    </Layout>
  );
}

export default FunZone;