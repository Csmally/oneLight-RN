import { createContext, useContext } from 'react';
import RouterTypetore from './modules/routerType';

export const stores = { RouterTypetore };

export const StoreContext = createContext(stores);

export const useStores = () => useContext(StoreContext);
