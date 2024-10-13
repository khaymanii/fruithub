import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";

export default function Mybasket() {
  return (
    <View style={tw`py-10 bg-[#FFA451] flex-1`}>
      <View style={tw`rounded-full w-20 px-2 py-2 bg-white text-center mx-4 `}>
        Go back
      </View>{" "}
      <Text style={tw`text-white text-lg text-center font-semibold pb-6`}>
        My Basket
      </Text>
      <View style={tw`bg-white h-full mb-4`}>
        <View style={tw`flex-row items-center`}>
          <View>
            <Image />
            <View>
              <Text></Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
