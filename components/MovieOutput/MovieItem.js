import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MovieItem = ({ title, image, id }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${image}`;
  let navigation = useNavigation();
  let movieHandler = () => {
    navigation.navigate("MovieScreen", { id: id });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={movieHandler}>
      {/* <Text>{title}</Text> */}
      <Image source={{ uri: imageUrl }} style={styles.image} />
    </TouchableOpacity>
  );
};

export default MovieItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 12,
    elevation: 10,
  },
  image: {
    width: 100,
    height: 150,
  },
});
