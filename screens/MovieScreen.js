import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const MovieScreen = () => {
  let route = useRoute();
  let params = route.params.id;
  return (
    <View>
      <Text>{params}</Text>
    </View>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({});
