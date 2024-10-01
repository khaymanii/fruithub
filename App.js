import React from "react";
import tw from "twrnc";
import { View, Text } from "react-native";
import Authentication from "./screens/Authentication";
export default function App() {
  return (
    <View style={tw`flex-1`}>
      <Authentication />{" "}
    </View>
  );
}
