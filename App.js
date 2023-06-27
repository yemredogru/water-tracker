import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';

import {  combineReducers, applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from "redux";
import waterReducer from './src/store/water-reducer'
import ReduxThunk from 'redux-thunk';

import { SafeAreaProvider } from "react-native-safe-area-context";

import MyTabs from './src/navigation';

const rootReducer = combineReducers({
  water: waterReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MyTabs />
      <StatusBar />
      </SafeAreaProvider>
    </Provider>
  );
}

