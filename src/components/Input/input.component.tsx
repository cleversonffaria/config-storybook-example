import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

export function Input() {
  const [text, setText] = useState("");

  const handleTextChange = (newText: string) => {
    setText(newText);
  };

  return (
    <TextInput
      style={styles.input}
      placeholder="Digite aqui..."
      value={text}
      onChangeText={handleTextChange}
    />
  );
}

const styles = StyleSheet.create({
  input: { margin: 20 },
});
