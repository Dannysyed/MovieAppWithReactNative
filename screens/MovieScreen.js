import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import axios from "axios";

const MovieScreen = () => {
  let [data, setData] = useState({});
  const imageUrl = `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`;

  const apiKey = "YOUR_API_KEY";
  let route = useRoute();
  let params = route.params.id;
  const apiItem = `https://api.themoviedb.org/3/movie/${params}?api_key=${apiKey}&language=en-US`;
  const authToken = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmNmN2RjOTM1NTQ1ODkyMGFmZTdiYjAxZDg4MTI1MCIsInN1YiI6IjY2NDMzMDlmM2E4ZjdmYmNjODc3ZjJhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cOqulLZ1t4Lb3W8wWBec90DgMVVtd-Kp8izvc7hw9mg`;
  let getItem = async () => {
    try {
      const response = await axios.get(apiItem, {
        headers: {
          Authorization: authToken,
        },
      });

      let result = response.data;
      console.log(result);
      setData(result);
    } catch (error) {
      console.error("Error fetching movies:", error);
      return { movies: [], genres: [] };
    }
  };
  useEffect(() => {
    getItem();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{data.title}</Text>
    </View>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 10,
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 350,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
