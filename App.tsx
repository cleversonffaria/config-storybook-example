import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

function App() {
  return (
    <View style={styles.container}>
      <Text>Open Tesasdt!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

let AppEntryPoint = App;

console.log(Constants.expoConfig?.extra?.storybookEnabled);

if (true) {
  AppEntryPoint = require("./.ondevice").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;
