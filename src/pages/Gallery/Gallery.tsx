import React, { useState } from 'react';

import Card from '../../components/ui/Card/Card';
import Layout from '../../components/ui/Layout/Layout';
import { GalleryContainer, GalleryItemContainer } from './Gallery.styles';
import { INFT } from '../../entities/nft.entity';
import Modal from '../../components/ui/Modal/Modal';
import Button from '../../components/ui/Button/Button';

interface GalleryProps {};

export const nftTest = {
  image: 'https://lh3.googleusercontent.com/x7RgiE0ReCqNZUbNUtbIT8VwCPBoOYmA38BDm3Ou8b-WDQiWxXhZjUq2L0n5DYE5k4tMmfjBxmxjjXoEt4ad-43R8Cb39HqTWFVhhQ=s260',
  title: 'DogePunk Animate #7889',
  totalLeft: '3 out of 5',
  price: 0.000453
}

const Gallery: React.FC<GalleryProps> = () => {
  const [selectedNFT, setSelectedNFT] = useState<INFT>(null);

  return (
    <Layout>
      <GalleryContainer>
        {
          [1,2,3,4,5,6,7,8,9,0,33,4,4,].map((_, idx) => (
            <GalleryItemContainer
              key={idx}
              onClick={() => setSelectedNFT(nftTest)}
            >
              <Card
                image={nftTest.image}
                title={nftTest.title}
                totalLeft={nftTest.totalLeft}
                price={nftTest.price}
              />
            </GalleryItemContainer>
          ))
        }
      </GalleryContainer>

      {selectedNFT && (
        <Modal
          width="700px"
          height="600px"
          title={selectedNFT.title}
          onClose={() => setSelectedNFT(null)}
        >
          <img 
            src={selectedNFT.image}   
          />
        <Button
          outline
          dark
          label="Buy Now"
          height="50px"
          width="150px"
          onClick={() => {}}
        />
        </Modal>
      )}
    </Layout>
  )
}

export default Gallery;
