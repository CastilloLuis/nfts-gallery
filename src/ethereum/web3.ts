import Web3 from 'web3';

export function getWeb3(): Promise<any> {
  enableWallet();
  return new Promise((res, rej) => {
    let web3 = window.web3;
    console.log(web3)
    if (!web3) rej('MetaMask not available');
    web3 = new Web3(web3.currentProvider);
    res(web3);
  })
}

export async function enableWallet(): Promise<void> {
  if (!window.ethereum.isConnected()) {
    await window.ethereum.enable();
  }
}
