import tw from "twrnc";
import { View } from "react-native";
import Mybasket from "./screens/Mybasket";
export default function App() {
  return (
    <View style={tw`flex-1`}>
      <Mybasket />{" "}
    </View>
  );
}
