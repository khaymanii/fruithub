import { Text, View, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import BarLogo from "../assets/icons/bar.svg";

export default function Home() {
  return (
    <View>
      <View>
        <Image source={BarLogo} style={tw`w-[20px] h-[20px] mx-4`} />
        <View></View>{" "}
      </View>
    </View>
  );
}
