import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import axios from "axios";

const MovieScreen = () => {
  const [data, setData] = useState(null);
  const imageUrl = data
    ? `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`
    : "https://via.placeholder.com/300x350";
  const route = useRoute();
  const params = route.params.id;
  const apiKey = "YOUR_API_KEY";
  const apiItem = `https://api.themoviedb.org/3/movie/${params}?api_key=${apiKey}&language=en-US`;
  const authToken = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmNmN2RjOTM1NTQ1ODkyMGFmZTdiYjAxZDg4MTI1MCIsInN1YiI6IjY2NDMzMDlmM2E4ZjdmYmNjODc3ZjJhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cOqulLZ1t4Lb3W8wWBec90DgMVVtd-Kp8izvc7hw9mg`;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItem = async () => {
      try {
        const response = await axios.get(apiItem, {
          headers: {
            Authorization: authToken,
          },
        });
        setData(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };
    getItem();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        {data && (
          <>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.releaseDate}>
              Release Date: {data.release_date}
            </Text>
            <Text style={styles.overview}>{data.overview}</Text>
            <Text style={styles.voteAverage}>
              Average Vote: {data.vote_average}
            </Text>
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  releaseDate: {
    fontSize: 16,
    marginTop: 5,
  },
  overview: {
    fontSize: 18,
    marginTop: 20,
    textAlign: "center",
  },
  voteAverage: {
    fontSize: 16,
    marginTop: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
