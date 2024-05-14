import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import fetchMovies from "../components/FetchData";

const HomeScreen = () => {
  let [movieData, setMovieData] = useState([]);
  useEffect(() => {
    setMovieData(fetchMovies());
  }, []);
  console.log(movieData);
  return (
    <View>
      <Text>List of movies</Text>
      <FlatList
        data={movieData}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
