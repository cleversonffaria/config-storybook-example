import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "./src/screens/Home/home.components";
import { Login } from "./src/screens/Login/home.components";

import { RootStackParamList } from "./src/interfaces/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

let AppEntryPoint = App;

const isEnableStorybook = true;

if (isEnableStorybook) AppEntryPoint = require("./.ondevice").default;

export default AppEntryPoint;
