import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Input } from "../../components/Input/input.component";

export function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Input />
      <StatusBar style="auto" />
    </View>
  );
}

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
