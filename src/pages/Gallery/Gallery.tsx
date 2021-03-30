import React, { useEffect, useState } from 'react';

import Card from '../../components/ui/Card/Card';
import Layout from '../../components/ui/Layout/Layout';
import { GalleryContainer, GalleryItemContainer, ButtonContainer, FeesLabel, LoadingText } from './Gallery.styles';
import { INFT } from '../../entities/nft.entity';
import Modal from '../../components/ui/Modal/Modal';
import Button from '../../components/ui/Button/Button';
import { generateNFT } from '../../utils/utils';
import { useStore } from '../../store/provider';
import { NFT_GALLERY_QTY } from '../../../nfts-quantities';

interface GalleryProps {};


const Gallery: React.FC<GalleryProps> = () => {

  const { ui: { contractLoaded } } = useStore();
  const [selectedNFT, setSelectedNFT] = useState<INFT>(null);

  if (!contractLoaded) {
    return <Layout>
      <LoadingText>Loading...</LoadingText>
    </Layout>
  }

  return (
    <Layout>
      <GalleryContainer>
        {
          generateNFT(NFT_GALLERY_QTY, true).map((nft, idx) => (
            <GalleryItemContainer
              key={idx}
              onClick={() => setSelectedNFT(nft)}
            >
              <Card
                isGallery
                image={nft.fullImage}
                title={nft.name}
                kind={nft.kind}
              />
            </GalleryItemContainer>
          ))
        }
      </GalleryContainer>

      {selectedNFT && (
        <Modal
          width="800px"
          height="800px"
          title={selectedNFT.name}
          onClose={() => setSelectedNFT(null)}
        >
          <img 
            src={selectedNFT.preview}
            style={{
              width: '80%'
            }}
          />
          <ButtonContainer>
            <Button
              outline
              dark
              label="Mint Now"
              height="50px"
              width="150px"
              onClick={() => {}}
            />
            <FeesLabel>Minting cost 0.5 ETH + gas fees</FeesLabel>
          </ButtonContainer>
        </Modal>
      )}
    </Layout>
  )
}

export default Gallery;
