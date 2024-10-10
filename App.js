import tw from "twrnc";
import { View } from "react-native";
import Add from "./screens/Add";
export default function App() {
  return (
    <View style={tw`flex-1`}>
      <Add />{" "}
    </View>
  );
}
