import { createContext, useContext } from 'react';

export const stores = {};

export const StoreContext = createContext(stores);

export const useStores = () => useContext(StoreContext);
