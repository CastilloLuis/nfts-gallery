export async function getGalleryPriceByKind(kind: number): Promise<string> {
  const contract = window.contracts.minter;
  return await contract.nftKindsPrices(kind);
}

export async function getRemainingNftByKind(kind: number): Promise<any> {
  const contract = window.contracts.minter;
  return await contract.nftKindsNumbers(kind);
}

export async function getTotalFunZoneNFTSold(): Promise<number> {
  const contract = window.contracts.minter;
  return await contract.funMint.call();
}

export async function mint(kind: number, from: string, amount: string): Promise<void> {
  const contract = window.contracts.minter;
  try {
    await contract.mint(kind, { from, value: window.web3.utils.toWei(amount) });
  } catch (e) {
    console.log(e);
  }
}

export async function mintFun(kind: number, from: string, amount: string): Promise<void> {
  const contract = window.contracts.minter;
  try {
    await contract.mintFun(kind, { from, value: window.web3.utils.toWei(amount) });
  } catch (e) {
    console.log(e);
  }
}
