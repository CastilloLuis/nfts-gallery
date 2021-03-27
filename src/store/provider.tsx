import React, {
  createContext,
  useContext,
  useReducer
} from 'react';
import storeReducer, { initialStore } from './reducer';

const StoreContext = createContext(initialStore);

const StoreProvider: React.FC<{children: any}> = ({ children }) => (
  <StoreContext.Provider value={useReducer(storeReducer as any, initialStore) as any}>
    {children}
  </StoreContext.Provider>
);

const useStore = () => useContext(StoreContext)[0];
const useDispatch = () => useContext(StoreContext)[1];

export { StoreContext, useStore, useDispatch };
export default StoreProvider;
