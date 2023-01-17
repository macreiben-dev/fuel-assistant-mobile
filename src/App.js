import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import RelayComponent from './components/RelayComponent'

import setupStore from './stores/stintdetails/configureStore';

const store = setupStore();

export default function App() {
  return (
    // <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <RelayComponent/>

      </View>
    // </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
