import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Card = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inside_container}>
        <Image style={styles.img} source={{ uri: item.imgURL }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
        {!item.inStock && <Text style={styles.stock}>{"STOKTA YOK"}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0e0e0",
    margin: 5,
    borderRadius: 5,
    flex: 1,
  },
  inside_container: {
    padding: 10,
  },
  img: {
    height: 175,
    width: "100%",
    borderRadius: 5,
    marginBottom: 5,
    alignSelf: "center",
    objectFit: "contain",
  },
  title: { fontWeight: "800", fontSize: 17 },
  price: { fontWeight: "600", color: "grey" },
  stock: { fontWeight: "600", color: "red" },
});

export default Card;
