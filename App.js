import React from "react";
import tw from "twrnc";
import { View } from "react-native";
export default function App() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Image
        source={require("./assets/icons/logo.svg")}
        style={tw`w-50 h-50`}
        resizeMode="cover"
      />
    </View>
  );
}
