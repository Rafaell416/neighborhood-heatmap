import React from "react";
import { View, Text, Button, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const dark = "#171717";

const items = [
  { emoji: "🔪", label: "Nivel de hurtos", rating: "4.6" },
  { emoji: "🚶‍♀️", label: "¿Es solitario?", rating: "4.6" },
  { emoji: "👶", label: "¿Es seguro para los niños?", rating: "4.6" },
  { emoji: "🏘️", label: "¿Es bueno pa vivir?", rating: "4.6" },
  { emoji: "👮", label: "¿Hay apoyo policial?", rating: "4.6" },
  { emoji: "🛝", label: "¿Hay lugares de interés?", rating: "4.6" },
];


function NeigborhoodDetail({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={dark} />
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>El Chagualo</Text>
        <View style={styles.ratingContainer}>
          <Text style={{ fontSize: 15 }}>⭐️</Text>
          <Text style={styles.rating}>4.6</Text>
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <View style={styles.section}>
          {items?.map((item) => (
            <View style={styles.itemContainer}>
              <View style={styles.item}>
                <Text style={styles.emoji}>{item?.emoji}</Text>
                <Text style={styles.itemText}>{item?.label}</Text>
              </View>
              <Text style={styles.stars}>⭐️ 4.5</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <View style={styles.section}>
          <ScrollView contentContainerStyle={{ paddingBottom: 500 }}>
            {[...Array(20)].map((n) => (
              <View key={n} style={styles.reviewCard}>
                <Text style={styles.reviewerName}>Edinson</Text>
                <Text style={styles.review}>"Este es un buen vividero, llevo variosa años viviendo en este sector y me encanta"</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.addopinion}>Agregar opinión</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  line: {
    height: 5,
    width: 70,
    backgroundColor: dark,
    borderRadius: 5,
    position: "absolute",
    top: 10,
    left: Dimensions.get('window').width / 2.5,
  },
  topContainer: {
    width: "100%",
    height: "5%",
    marginTop: 20,
    paddingLeft: 20,
    justifyContent: "center"
  },
  titleContainer: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: dark,
    fontSize: 35,
    fontFamily: "Mulish_700Bold"
  },
  rating: {
    fontFamily: "Mulish_600SemiBold",
    color: dark,
    fontSize: 15
  },
  ratingContainer: {
    flexDirection: "row",
    borderRadius: 3,
    padding: 3,
    backgroundColor: "rgba(243, 156, 18, 0.26)",
    alignItems: "center",
    marginLeft: 20,
    justifyContent: "center"
  },
  sectionContainer: {
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  section: {
    backgroundColor: "#ecf0f1",
    borderRadius: 5,
    marginTop: 10
  },
  itemContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5
  },
  item: {
    flexDirection: "row",
    alignItems: "center"
  },
  stars: {
    fontFamily: "Mulish_400Regular",
    color: dark
  },
  itemText: {
    fontFamily: "Mulish_600SemiBold",
    color: dark,
    fontSize: 18,
    marginVertical: 5
  },
  emoji: {
    fontSize: 18,
    marginRight: 10
  },
  buttonContainer: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    alignItems: "center"
  },
  button: {
    backgroundColor: "#e74c3c",
    width: "80%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#bdc3c7",
    shadowOffset: { height: 3, width: 0 },
    shadowOpacity: 1,
    shadowRadius: 6,
  },
  addopinion: {
    color: "white",
    fontFamily: "Mulish_600SemiBold",
    fontSize: 16
  },
  reviewCard: {
    borderRadius: 10,
    backgroundColor: "white",
    padding: 5,
    margin: 5
  },
  reviewerName: {
    fontFamily: "Mulish_700Bold",
    color: dark,
    marginBottom: 5
  },
  review: {
    color: dark,
    fontFamily: "Mulish_400Regular"
  }
});

export default NeigborhoodDetail;