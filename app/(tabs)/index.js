import { Text, View } from "react-native";
import { globalStyles } from "../../styles/global";

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Homepage</Text>
      <Text style={globalStyles.text}>Random Text</Text>
    </View>
  );
}
