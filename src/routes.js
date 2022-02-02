import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import Preload from "./pages/Preload";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";

const Stack = createStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          cardStyle: { backgroundColor: "#222" },
        }}
        initialRouteName="Preload"
      >
        <Stack.Screen
          name="Preload"
          component={Preload}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitleAlign: "center",
            headerTitle: () => <Header />,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTransparent: true,
            headerTitle: () => <Header />,
            headerBackTitleVisible: false,
            headerTitleAlign: "center",
            headerBackImage: () => <></>,
          }}
        />

        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: true,
            cardStyle: { backgroundColor: "#222" },
            headerTransparent: true,
            headerTitle: () => <Header />,
            headerBackTitleVisible: false,
            headerTitleAlign: "center",
            headerBackImage: () => <></>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
