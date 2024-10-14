import tw from "twrnc";
import { View } from "react-native";
import OrderComplete from "./screens/OrderComplete";
export default function App() {
  return (
    <View style={tw`flex-1`}>
      <OrderComplete />{" "}
    </View>
  );
}
