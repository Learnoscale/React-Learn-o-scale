import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage';
import  userReducer from './Slices/UserSlice';
import themeReducer from './Slices/ThemeSlice';
import testReducer from './reducers/testReducer';

const reducers = combineReducers({
    user: userReducer,
    theme: themeReducer,
    testDurationState: testReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['user']
}
const persistedReducer = persistReducer(persistConfig, reducers)
export  const store= configureStore({
    reducer: persistedReducer,
    middleware:[thunk,logger]
})
export const persistor=persistStore(store);
