import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import fetchMovies from "../FetchData";

const MovieOutput = () => {
  let [movieData, setMovieData] = useState([]);
  let [PosterData, setPosterData] = useState([]);
  let [genreData, setGenreData] = useState([]);
  const imageUrl = `https://image.tmdb.org/t/p/w500/${PosterData[1]}`;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMovies();
      setMovieData(data.movies);
      setGenreData(data.genres);
      const posters = data.movies.slice(0, 3).map((movie) => movie.poster_path);
      setPosterData(posters);
    };
    fetchData();
  }, []);
  const getMoviesByGenre = (genreId) => {
    return movieData.filter((movie) => movie.genre_ids.includes(genreId));
  };
  console.log(genreData);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        {genreData.map((genre) => (
          <View key={genre.id}>
            <Text style={styles.genreTitle}>{genre.name}</Text>
            <MovieList data={getMoviesByGenre(genre.id)} />
          </View>
        ))}
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
