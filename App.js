import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { Light_color, Secondary_color } from "./components/Colors";
import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import SearchMovie from "./screens/SearchMovie";
import MovieScreen from "./screens/MovieScreen";
import DownloadScreen from "./screens/DownloadScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { LinearGradient } from "expo-linear-gradient";

const BottomTabs = createBottomTabNavigator();

const Stack = createStackNavigator();
const screenOptions = {
  tabBarStyle: [
    {
      height: 70,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      overflow: "hidden",
    },
  ],
  tabBarBackground: () => (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    />
  ),
  tabBarLabelStyle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  tabBarActiveTintColor: "#fff",
  tabBarInactiveTintColor: "rgba(255, 255, 255, 0.7)",
  tabBarShowLabel: false,
  tabBarIconStyle: {
    marginBottom: 5,
  },
  tabBarBackground: () => (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    />
  ),
  headerBackground: () => (
    <LinearGradient
      colors={["#4c669fd9", "#3b589898", "#192f6a"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    />
  ),
  headerLeft: () => (
    <Image
      source={require("./assets/Disney.png")}
      style={{ width: 80, height: 40, marginLeft: 150 }}
    />
  ),
};

function DrawerScreen() {
  return (
    <BottomTabs.Navigator
      initialRouteName="HomeScreen"
      screenOptions={screenOptions}
    >
      <BottomTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitleStyle: { display: "none" },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="SearchMovies"
        component={SearchMovie}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Download"
        component={DownloadScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="download" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="man" color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="StartScreen"
          component={DrawerScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MovieScreen" component={MovieScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
