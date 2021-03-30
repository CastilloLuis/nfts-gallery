import React, { useEffect } from 'react';

import { useDispatch } from '../../store/provider';
import { types } from '../../store/types';

import { getWeb3 } from '../../ethereum/web3';
import minterContractProvider from '../../providers/minter.provider';

interface Web3ProviderProps {
  children: any;
}

const Web3Provider: React.FC<Web3ProviderProps> = ({ children }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    initWeb3();
  }, [])

  const initWeb3 = async(): Promise<void> => {
    window.web3 = await getWeb3();
    handleDeployedSmartContract();
  }

  const handleDeployedSmartContract = async(): Promise<void> => {
    const minter = await minterContractProvider(window.web3.currentProvider);
    window.contracts = {
      ...window.contracts,
      minter
    };
    dispatch({ type: types.ui.contractLoaded, payload: true });
  }
  
  return (
    <div>
      {children}
    </div>
  )
}

export default Web3Provider;
