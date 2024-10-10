import React from "react";
import tw from "twrnc";
import { View, Text } from "react-native";
import Home from "./screens/Home";
export default function App() {
  return (
    <View style={tw`flex-1`}>
      <Home />{" "}
    </View>
  );
}
