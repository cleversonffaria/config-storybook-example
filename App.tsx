import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Button } from "./components/Button/button";
import { Input } from "./components/Input/input.component";

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Config StoryBook</Text>

      <Button onPress={() => {}} text="Clique aqui" />

      <Input />
      <StatusBar style="auto" />
    </View>
  );
}

let AppEntryPoint = App;

if (false) AppEntryPoint = require("./.ondevice").default;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AppEntryPoint;
