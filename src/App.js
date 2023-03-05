import { StyleSheet, View } from "react-native";
import { Provider, connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StintComponent from "./components/StintComponent";

import setupStore from "./stores/stintdetails/configureStore";

// ==============================================

const store = setupStore();

// =============================================

// Create stack navigator
let RootStack = createNativeStackNavigator();

// ==============================================

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="StintDetail" component={StintComponent} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
