import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import fetchMovies from "../components/FetchData";
import MovieOutput from "../components/MovieOutput/MovieOutput";

const HomeScreen = () => {
  return <MovieOutput />;
};

export default HomeScreen;

const styles = StyleSheet.create({});
