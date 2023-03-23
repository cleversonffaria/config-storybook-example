import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Button } from "../../components/Button/button";
import { Input } from "../../components/Input/input.component";

import { RootStackParamList } from "../../interfaces/navigation";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export function Home({ navigation }: HomeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>

      <Button
        onPress={() => {
          navigation.navigate("Login");
        }}
        text="Clique aqui"
      />

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
