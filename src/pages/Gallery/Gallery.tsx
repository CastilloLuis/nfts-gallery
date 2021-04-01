import React, { useEffect, useState } from 'react';

import Card from '../../components/ui/Card/Card';
import Layout from '../../components/ui/Layout/Layout';
import { GalleryContainer, GalleryItemContainer, ButtonContainer, FeesLabel, LoadingText } from './Gallery.styles';
import { INFT } from '../../entities/nft.entity';
import Modal from '../../components/ui/Modal/Modal';
import Button from '../../components/ui/Button/Button';
import { NFT_GALLERY_QTY } from '../../../nfts-quantities';
import { SmartContractEvents } from '../../constants/events';

import { generateNFT } from '../../utils/utils';
import { useStore } from '../../store/provider';
import { mint } from '../../store/actions/actions';
import { smartContractEventHandler } from '../../store/actions/events';

import galleryJSON from '../../nfts/gallery.json';

interface GalleryProps {};

const Gallery: React.FC<GalleryProps> = () => {

  const { ui: { contractLoaded }, wallet: { currentAccount } } = useStore();
  const [gallery, setGallery] = useState<INFT[]>([]);
  const [selectedNFT, setSelectedNFT] = useState<INFT>(null);

  useEffect(() => {
    if (!contractLoaded) return;
    handleMintedGalleryNFT();
    setGallery(galleryJSON);
  }, [contractLoaded]);

  const mintGalleryNFT = async (): Promise<void> => {
    if (!currentAccount) return alert("You haven't connected the webapp with your MetaMask wallet, click on 'Connect Wallet' button");
    const { kind, price } = selectedNFT;
    await mint(kind, currentAccount, price);
  }

  const handleMintedGalleryNFT = async (): Promise<void> => {
    const result = await smartContractEventHandler(SmartContractEvents.GALLERY_MINTED);
    if (result?.returnValues) {
      setGallery([]);
      setGallery(generateNFT(NFT_GALLERY_QTY, true));
      setSelectedNFT(null);
    }
  }

  if (!contractLoaded) {
    return <Layout>
      <LoadingText>Loading...</LoadingText>
    </Layout>
  }

  return (
    <Layout>
      <GalleryContainer>
        { gallery?.length > 0 &&
          gallery.map((nft, idx) => (
            <GalleryItemContainer
              key={idx}
            >
              <Card
                isGallery
                image={nft.fullImage}
                title={nft.name}
                kind={nft.kind}
                onClick={(price) => setSelectedNFT({...nft, price})}
              />
            </GalleryItemContainer>
          ))
        }
      </GalleryContainer>

      {selectedNFT && (
        <Modal
          width="800px"
          height="700px"
          title={selectedNFT.name}
          onClose={() => setSelectedNFT(null)}
        >
          <img 
            src={selectedNFT.preview}
            style={{
              width: '60%'
            }}
          />
          <ButtonContainer>
            <Button
              outline
              dark
              label="Mint Now"
              height="50px"
              width="150px"
              onClick={mintGalleryNFT}
            />
            <FeesLabel>Minting cost 0.5 ETH + gas fees</FeesLabel>
          </ButtonContainer>
        </Modal>
      )}
    </Layout>
  )
}

export default Gallery;
