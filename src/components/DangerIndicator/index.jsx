import React from "react";
import { View, Text, StyleSheet } from "react-native";

function DangerIndicator() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Indicator de percepción</Text> */}
      <View style={styles.row}>
        <Text style={styles.text}>Less</Text>
        {[...Array(5)].map((n, i) => {
          const level = i + 1;
          return <View style={[styles.square, { backgroundColor: `rgba(231, 77, 60, 0.${level})` }]} />
        })}
        <Text style={styles.text}>More</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 60,
    right: 20,
    borderRadius: 2,
    padding: 5,
    backgroundColor: "#2c3e50",
    borderRadius: 5
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  square: {
    height: 10,
    width: 15,
    borderRadius: 2,
    marginRight: 3,
  },
  text: {
    color: "white",
    marginHorizontal: 10,
    fontSize: 12,
    alignSelf: "center",
    fontFamily: "Mulish_400Regular"
  }
});

export default DangerIndicator;