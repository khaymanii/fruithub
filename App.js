import React from "react";
import tw from "twrnc";
import { View, Text } from "react-native";
import Splash from "./screens/Splash";
export default function App() {
  return (
    <View style={tw`flex-1`}>
      <Splash />{" "}
    </View>
  );
}
