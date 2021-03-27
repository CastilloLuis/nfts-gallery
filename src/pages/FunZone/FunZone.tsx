import React, { useState } from 'react';

import Layout from '../../components/ui/Layout/Layout';
import Modal from '../../components/ui/Modal/Modal';
import Button from '../../components/ui/Button/Button';
import Card from '../../components/ui/Card/Card';
import {
  FunZoneContainer,
  FunZoneInputContainer,
  FunZoneInput,
  FunZoneItemContainer
} from './FunZone.styles';
import { nftTest } from '../../pages/Gallery/Gallery';

interface FunZone {};

const FunZone: React.FC<FunZone> = () => {


  const [tipArtist, setTipArtist] = useState<boolean>(false);

  return (
    <Layout>
      <FunZoneContainer>

        {
          [1,2,3,4,5,6,7,8,9,0,33,4,4,].map((_, idx) => (
            <FunZoneItemContainer
              key={idx}
              onClick={() => setTipArtist(true)}
            >
              <Card
                showTip
                image={nftTest.image}
                title={nftTest.title}
                totalLeft={nftTest.totalLeft}
                price={nftTest.price}
              />
            </FunZoneItemContainer>
          ))
        }
        {tipArtist && (
          <Modal
            title="Tip the Artist"
            onClose={() => setTipArtist(false)}
          >
          <FunZoneInputContainer>
            <i className="fab fa-ethereum"></i>
            <FunZoneInput placeholder="Enter your tip amount" />
          </FunZoneInputContainer>
          <Button
            outline
            dark
            label="Buy Now"
            height="50px"
            width="150px"
            onClick={() => setTipArtist(false)}
          />
          </Modal>
        )}
      </FunZoneContainer>
    </Layout>
  );
}

export default FunZone;