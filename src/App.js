import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RelayComponent from './components/RelayComponent'


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <RelayComponent/>

    </View>
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
