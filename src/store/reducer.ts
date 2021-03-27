import { types } from './types';

const initialStore = {
  ui: {
    walletModal: {
      open: false
    }
  }
}

const storeReducer = (state, action): void => {
  switch(action.type) {
    case types.ui.handleWalletModal:
      return {
        ...state,
        ui: {
          walletModal: { open: action.payload }
        }
      }
    default:
      return state;
  }
}

export { initialStore }
export default storeReducer;
