import React, { useEffect } from 'react';

import { useDispatch, useStore } from '../../../store/provider';
import { types } from '../../../store/types';
import { getWeb3 } from '../../../ethereum/web3';
import minterContractProvider from '../../../providers/minter.provider';

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

  useEffect(() => {
    handleDeployedSmartContract()
  }, [])

  const handleWalletConnection = async(): Promise<void> => {
    window.web3 = await getWeb3();
    handleDeployedSmartContract();
  }

  const handleDeployedSmartContract = async(): Promise<void> => {
    console.log(window.web3.currentProvider)
    const minter = await minterContractProvider(window.web3.currentProvider);
    window.contracts = {
      ...window.contracts,
      minter
    };
    dispatch({ type: types.ui.contractLoaded, payload: true });
    dispatch({ type: types.ui.handleWalletModal, payload: false});
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
          <WalletProviderBox onClick={handleWalletConnection}>
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
