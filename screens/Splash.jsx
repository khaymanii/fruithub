import { View, Image } from "react-native";
import React from "react";

export default function Splash() {
  return (
    <View className="flex-1 justify-center items-center">
      <Image source={require("../assets/icons/logo.svg")} className="" />
    </View>
  );
}
