export async function getGalleryPriceByKind(kind: number): Promise<string> {
  const contract = window.contracts.minter;
  return await contract.nftKindsPrices(kind);
}

export async function getRemainingNftByKind(kind: number): Promise<any> {
  const contract = window.contracts.minter;
  return await contract.nftKindsNumbers(kind);
}
