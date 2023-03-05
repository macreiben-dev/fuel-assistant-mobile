import { StyleSheet, View } from "react-native";
import { Provider, connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// ----------------------------------------------------------------

import StintComponent from "./components/StintComponent";
import StratComponent from "./components/StratComponent";

// ----------------------------------------------------------------

import setupStore from "./stores/stintdetails/configureStore";
import { routeToIcon, screenName } from "./navigation/tabbarIconConfig";

// ==============================================

const store = setupStore();

// =============================================

// Create stack navigator
let RootStack = createBottomTabNavigator();

// ==============================================

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = routeToIcon(route.name);

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <RootStack.Screen
            name={screenName.StintDetail}
            component={StintComponent}
          />
          <RootStack.Screen
            name={screenName.StratDetail}
            component={StratComponent}
          />
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
