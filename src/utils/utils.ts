import { INFT } from "../entities/nft.entity";
import Fries from '../assets/gallery/fries.jpeg';
import FriesPreview from '../assets/gallery/fries_preview.jpeg';
import Space from '../assets/funzone/space.jpeg';
import SpacePreview from '../assets/funzone/space_preview.jpeg';
import { NFT_FUN_ZONE } from "../constants/prices";

export function generateNFT(total: number, gallery: boolean = false): INFT[] {
  const nfts: INFT[] = [];
  const preview = gallery ? FriesPreview : SpacePreview;
  const fullImage = gallery ? Fries: Space;
  for (let i = 0; i < total; i++) {
    const name = gallery ? `Gallery NFT #${i}` : `Fun Zone NFT ${i}`;
    nfts.push({
      kind: i + 1,
      name,
      preview,
      fullImage,
      ...(!gallery && ({price: NFT_FUN_ZONE}))
    })
  }
  return nfts;
}
