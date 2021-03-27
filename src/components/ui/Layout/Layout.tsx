import React from 'react';

import { useDispatch, useStore } from '../../../store/provider';
import { types } from '../../../store/types';
import { enableWallet } from '../../../ethereum/web3';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Modal from '../Modal/Modal';

import { LayoutContainer, WalletProviderBox } from './Layout.styles';
import MetamaskIcon from '../../../assets/metamask.png';

interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { ui: { walletModal } } = useStore();
  const dispatch = useDispatch();

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
          <WalletProviderBox onClick={() => enableWallet()}>
            <div>
              <img src={MetamaskIcon} alt="Metamask Provider Icon" />
              <span>Metamask</span>
            </div>
            <i className="fas fa-arrow-right"></i>
          </WalletProviderBox>
        </Modal>
      )}
      <Footer />
    </LayoutContainer>
  );
}

export default Layout;
