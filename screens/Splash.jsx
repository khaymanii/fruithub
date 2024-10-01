import { View, Image, Text } from "react-native";
import React from "react";
import tw from "twrnc";

export default function Splash() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Image
        source={require("../assets/icons/logo.svg")}
        style={tw`w-50 h-50`}
        resizeMode="cover"
      />
    </View>
  );
}
