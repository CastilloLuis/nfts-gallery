  export const isMetaMaskInstalled = (): boolean => {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };
  