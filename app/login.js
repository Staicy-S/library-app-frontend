import { globalStyles } from "../styles/global";
import { Text, TextInput, View, Button, Pressable } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function Login() {
  const [name, setName] = useState("");
  return (
    <View style={[globalStyles.container, { justifyContent: "center" }]}>
      <Text style={globalStyles.heading}>Login</Text>
      <View style={globalStyles.spacing}>
        <TextInput
          placeholder="User name"
          onChangeText={(text) => {
            setName(text);
          }}
          value={name}
          style={globalStyles.textInput}
        />
        <Pressable
          onPress={() => {
            router.back();
            console.log(name);
          }}
          title="Submit"
          style={globalStyles.submitPressable}
        >
          <Text style={[globalStyles.text, globalStyles.submitPressableText]}>
            Submit
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
