import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ data }) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <MovieItem
              title={item.title}
              image={item.poster_path}
              id={item.id}
            />
          );
        }}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  );
};

export default MovieList;

const styles = StyleSheet.create({});
