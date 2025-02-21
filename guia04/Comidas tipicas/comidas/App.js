import { AppRegistry } from "react-native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  StatusBar,
  Image,
} from "react-native";

const DATA = [
  {
    id: "1",
    title: "Pupusas",
    src: require("./assets/img/pupusas.jpeg"), // Ruta a la imagen de la pupusa
    calories: "300 kcal por unidad", // Calorías por unidad
  },
  {
    id: "2",
    title: "Yuca Frita",
    src: require("./assets/img/yuca.jpg"), // Ruta a la imagen de la yuca frita
    calories: "250 kcal por porción", // Calorías por porción
  },
  {
    id: "3",
    title: "Tamales",
    src: require("./assets/img/tamales.jpg"), // Ruta a la imagen de los tamales
    calories: "280 kcal por unidad", // Calorías por unidad
  },
];

const Item = ({ title, img, calories }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Image source={img} style={styles.img} />
    <Text style={styles.calories}>{calories}</Text> {/* Mostrar calorías */}
  </View>
);

export default function App() {
  const renderItem = ({ item }) => (
    <Item title={item.title} img={item.src} calories={item.calories} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#00B496",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: "center", 
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  img: {
    width: 200,
    height: 125,
    borderWidth: 2,
    borderColor: "#d35647",
    resizeMode: "contain",
    marginBottom: 10,
  },
  calories: {
    fontSize: 16,
    color: "#333",
  },
});
