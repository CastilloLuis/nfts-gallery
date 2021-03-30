import MinterContract from '../../build/contracts/Minter.json';
import contract from 'truffle-contract';

export default async function(provider: any): Promise<any> {
  const _contract = contract(MinterContract);
  _contract.setProvider(provider);
  const instance = await _contract.deployed();
  return instance;
}
