import { types } from './types';

const initialStore = {
  ui: {
    contractLoaded: false,
    walletModal: {
      open: false
    }
  },
  wallet: {
    currentAccount: null
  }
}

const storeReducer = (state, action): void => {
  switch(action.type) {
    case types.ui.handleWalletModal:
      return {
        ...state,
        ui: {
          ...state.ui,
          walletModal: { open: action.payload }
        }
      }
    case types.ui.contractLoaded:
      return {
        ...state,
        ui: {
          ...state.ui,
          contractLoaded: action.payload
        }
      }
    case types.wallet.setCurrentAcount:
      return {
        ...state,
        wallet: {
          currentAccount: action.payload
        }
      }
    default:
      return state;
  }
}

export { initialStore }
export default storeReducer;
