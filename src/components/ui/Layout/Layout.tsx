import React, { useState } from 'react';

import { useDispatch, useStore } from '../../../store/provider';
import { types } from '../../../store/types';
import { isMetaMaskInstalled } from '../../../ethereum/metamask';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Modal from '../Modal/Modal';

import { LayoutContainer, WalletProviderBox, InvalidWalletExtension} from './Layout.styles';
import MetamaskIcon from '../../../assets/metamask.png';
import { enableWallet } from '../../../ethereum/web3';
import Spinner from '../../../components/animations/Spinner';

interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoadingWallet, setIsLoadingWallet] = useState<boolean>(false);
  const { ui: { walletModal } } = useStore();
  const dispatch = useDispatch();

  const handleWalletConnection = async () => {
    if (isLoadingWallet) return;
    setIsLoadingWallet(true);
    try {
      const accounts = await enableWallet();
      dispatch({ type: types.wallet.setCurrentAcount, payload: accounts[0] || null})
      setIsLoadingWallet(false);
      dispatch({ type: types.ui.handleWalletModal, payload: false})
    } catch (error) {
      console.error(error);
      setIsLoadingWallet(false);
    }
  }

  return (
    <LayoutContainer>
      <Header />
      {children}
      {walletModal.open && (
        <Modal
          width="320px"
          height="250px"
          title="Connect Wallet"
          onClose={() => dispatch({ type: types.ui.handleWalletModal, payload: false})}
        >
          {
            isMetaMaskInstalled() ? (
              <WalletProviderBox onClick={handleWalletConnection}>
                <div>
                  <img src={MetamaskIcon} alt="Metamask Provider Icon" />
                  <span>Metamask</span>
                </div>
                {
                  isLoadingWallet ? (
                    <div style={{marginTop: '20px'}}><Spinner /></div>
                  ) : (
                    <i className="fas fa-arrow-right"></i>
                  )
                }
              </WalletProviderBox>
            ) : (
              <InvalidWalletExtension>
                <img src={MetamaskIcon} alt="Metamask Provider Icon" />
                Looks like MetaMask extension is not installed in your browser
              </InvalidWalletExtension>
            )
          }
        </Modal>
      )}
      <Footer />
    </LayoutContainer>
  );
}

export default Layout;
