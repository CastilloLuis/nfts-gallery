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
import { nftTest } from '../../pages/Gallery/Gallery';
import { ButtonContainer, FeesLabel } from '../../pages/Gallery/Gallery.styles';

interface FunZone {};

const FunZone: React.FC<FunZone> = () => {

  const [tipArtist, setTipArtist] = useState<boolean>(false);
  const [tipValue, setTipValue] = useState<number | string>(0);

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
      </FunZoneContainer>
    </Layout>
  );
}

export default FunZone;