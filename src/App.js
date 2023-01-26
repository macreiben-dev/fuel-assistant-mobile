import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StintComponent from "./components/StintComponent";
import PitWallComponent from "./components/PitWallComponent";

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
          <RootStack.Screen
            name="Stint Consumption Calculator"
            component={StintComponent}
          />
          <RootStack.Screen
            name="Pit Wall"
            component={PitWallComponent}
          ></RootStack.Screen>
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
