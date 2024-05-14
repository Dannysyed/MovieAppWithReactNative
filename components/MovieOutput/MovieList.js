import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ data }) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <MovieItem title={item.title} image={item.poster_path} />;
        }}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  );
};

export default MovieList;

const styles = StyleSheet.create({});
