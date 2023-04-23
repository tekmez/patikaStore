import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Card from "./components/Card/Card";
import productData from "./data.json";
import { useState } from "react";

export default function App() {
  const renderItem = ({ item }) => <Card item={item} />;
  const [data, setData] = useState(productData);
  const onChangeText = (text) => {
    const arr = productData.filter((el) =>
      el.title.toLowerCase().includes(text.toLowerCase())
    );
    setData(arr);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>PATIKASTORE</Text>
      <TextInput
        style={styles.search}
        placeholder="Ara.."
        onChangeText={onChangeText}
      />
      <FlatList numColumns={2} data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    margin: 5,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#9400d3",
    marginBottom: 10,
  },
  search: {
    backgroundColor: "#dee2e6",
    borderRadius: 5,
    height: 40,
    padding: 10,
  },
});
