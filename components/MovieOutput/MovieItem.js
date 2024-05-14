import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const MovieItem = ({ title, image }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${image}`;
  return (
    <View style={styles.container}>
      {/* <Text>{title}</Text> */}
      <Image source={{ uri: imageUrl }} style={styles.image} />
    </View>
  );
};

export default MovieItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 10,
    elevation: 10,
  },
  image: {
    width: 100,
    height: 150,
  },
});
