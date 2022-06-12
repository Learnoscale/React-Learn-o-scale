import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
// import logger from 'redux-logger'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage';
import reducers from './reducers/Index';

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['user']
}
const persistedReducer = persistReducer(persistConfig, reducers)
export  const store= configureStore({
    reducer: persistedReducer,
    // middleware:[thunk,logger]
    middleware:[thunk]

})
export const persistor=persistStore(store);
