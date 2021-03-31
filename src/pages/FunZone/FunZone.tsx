import React, { useEffect, useState } from 'react';

import Layout from '../../components/ui/Layout/Layout';
import Modal from '../../components/ui/Modal/Modal';
import Button from '../../components/ui/Button/Button';
import Card from '../../components/ui/Card/Card';
import {
  FunZoneContainer,
  FunZoneInputContainer,
  FunZoneInput,
  FunZoneItemContainer,
  FunZoneModalLabel,
  TotalNFTSoldContainer
} from './FunZone.styles';
import { ButtonContainer, FeesLabel, LoadingText } from '../../pages/Gallery/Gallery.styles';
import { generateNFT } from '../../utils/utils';
import { INFT } from '../../entities/nft.entity';
import { useStore } from '../../store/provider';
import { NFT_FUN_ZONE_QTY } from '../../../nfts-quantities';
import { PRICE_NFT_FUN_ZONE } from '../../constants/mint';
import { getTotalFunZoneNFTSold, mintFun } from '../../store/actions/actions';

interface FunZone {};

const MAX_FUN_ZONE_NFT = '100,000';

const FunZone: React.FC<FunZone> = () => {

  const { ui: { contractLoaded }, wallet: { currentAccount } } = useStore();
  const [selectedNFT, setSelectedNFT] = useState<INFT>(null);
  const [accountBalance, setAccountBalance] = useState<string>(null);  
  const [tipKind, setTipKind] = useState<number>(null);
  const [tipArtist, setTipArtist] = useState<boolean>(false);

  const [tipValue, setTipValue] = useState<string>('0');
  const [totalSold, setTotalSold] = useState<string>('0');

  useEffect(() => {
    if (!contractLoaded) return;
    getTotalNFTSold();
  }, [contractLoaded]);

  useEffect(() => {
    if (!currentAccount) return;
    getAccountBalance()
  }, [currentAccount]);

  const getAccountBalance = async () => {
    const balance = await window.web3.eth.getBalance(currentAccount);
    const etherBalance = window.web3.utils.fromWei(balance, 'ether');
    setAccountBalance(etherBalance);
  }
  
  const handleCardClick = (event: EventTarget, nft: INFT): void => {
    const className = (event as HTMLElement).className;
    if (!className.includes('image')) {
      setTipKind(nft.kind);
      return setTipArtist(true);
    }
    setSelectedNFT(nft);
  }

  const getTotalNFTSold = async (): Promise<void> => {
    const total = await getTotalFunZoneNFTSold();
    setTotalSold(total.toString());
  }

  const tipOverBalance = (totalTipAmount: number): boolean => {
    const etherBalance = parseFloat(accountBalance);
    return totalTipAmount > etherBalance;
  }

  const mintFunZoneNFT = async (): Promise<void> => {
    if (!currentAccount) return alert("You haven't connected the webapp with your MetaMask wallet, click on 'Connect Wallet' button");
    const totalAmount = parseFloat(tipValue) + parseFloat(PRICE_NFT_FUN_ZONE);
    if (tipOverBalance(totalAmount)) return alert('You tried to tip with a value over your account balance');
    await mintFun(tipKind, currentAccount, totalAmount.toString());
    setTipValue('');
    setTipArtist(null);
    await getTotalNFTSold();
  }

  if (!contractLoaded) {
    return <Layout>
      <LoadingText>Loading...</LoadingText>
    </Layout>
  }
  
  return (
    <Layout>
      <TotalNFTSoldContainer>
        <span>{totalSold} out of {MAX_FUN_ZONE_NFT} minted</span>
      </TotalNFTSoldContainer>
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
            onClose={() => {
              setTipValue('');
              setTipArtist(false);
            }}
          >
            <FunZoneModalLabel>Mint cost</FunZoneModalLabel>
            <FunZoneInputContainer>
              <i className="fab fa-ethereum"></i>
              <FunZoneInput disabled value="0.01 ETH" />
            </FunZoneInputContainer>
            <FunZoneModalLabel>Tip to the Artist</FunZoneModalLabel>
            <FunZoneInputContainer  error={isNaN(Number(tipValue)) && tipValue.length > 0}>
              <i className="fab fa-ethereum"></i>
              <FunZoneInput type="text" value={tipValue} onChange={e => setTipValue(e.target.value.replace('-', '').replace('+', ''))} />
              <span>ETH</span>
            </FunZoneInputContainer>
            <ButtonContainer>
              <Button
                outline
                dark
                label="Mint Now"
                height="50px"
                disabled={isNaN(Number(tipValue)) || tipValue.length === 0}
                width="150px"
                onClick={mintFunZoneNFT}
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
                width: '60%'
              }}
            />
          </Modal>
        )}
      </FunZoneContainer>
    </Layout>
  );
}

export default FunZone;