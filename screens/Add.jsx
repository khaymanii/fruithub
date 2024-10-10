import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";

export default function Add() {
  return (
    <View style={tw`py-10 bg-[#FFA451] flex-1`}>
      <View
        style={tw`rounded-full w-20 px-2 py-2 bg-white text-center mb-4 mx-4 `}
      >
        Go back
      </View>{" "}
      <View style={tw`items-center mb-6 px-4 `}>
        {" "}
        <Image
          source="../assets/images/plate.png"
          style={tw`w-[200px] h-[200px]`}
        />{" "}
      </View>
      <View style={tw`rounded-t-2xl bg-white h-[100%] px-4`}>
        <Text style={tw`pt-6 text-3xl font-semibold`}>Quinoa Fruit Salad</Text>
      </View>
    </View>
  );
}
