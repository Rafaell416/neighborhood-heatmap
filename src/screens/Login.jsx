import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login screen</Text>
      <Button
        title="See heatmap"
        onPress={() => navigation.navigate("Heatmap")}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Mulish_600SemiBold"
  }
});

export default Login;