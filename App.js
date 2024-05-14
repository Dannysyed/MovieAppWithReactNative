import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Light_color, Secondary_color } from "./components/Colors";
import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import SearchMovie from "./screens/SearchMovie";
import MovieScreen from "./screens/MovieScreen";
import DownloadScreen from "./screens/DownloadScreen";
import ProfileScreen from "./screens/ProfileScreen";

const BottomTabs = createBottomTabNavigator();

const Stack = createStackNavigator();

function DrawerScreen() {
  return (
    <BottomTabs.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerStyle: { backgroundColor: "white" } }}
    >
      <BottomTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
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
