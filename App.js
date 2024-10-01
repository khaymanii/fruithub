import React from "react";
import tw from "twrnc";
import { View } from "react-native";
import Welcome from "./screens/Welcome";
export default function App() {
  return (
    <View style={tw`flex-1`}>
      <Welcome />{" "}
    </View>
  );
}
