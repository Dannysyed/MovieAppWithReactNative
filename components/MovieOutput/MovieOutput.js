import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import fetchMovies from "../FetchData";

const MovieOutput = () => {
  let [movieData, setMovieData] = useState([]);
  let [PosterData, setPosterData] = useState([]);
  const imageUrl = `https://image.tmdb.org/t/p/w500/${PosterData[1]}`;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMovies();
      setMovieData(data);
      const posters = data.slice(0, 3).map((movie) => movie.poster_path);
      console.log(posters);
      setPosterData(posters);
    };
    fetchData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text>List of movies</Text>
        <MovieList data={movieData} />
        <Text>Animation</Text>
        <MovieList data={movieData} />
        <Text>Adventure</Text>
        <MovieList data={movieData} />
      </View>
    </ScrollView>
  );
};
export default MovieOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 20,
  },
  image: {
    width: 290,
    height: 390,
    alignSelf: "center",
  },
});
