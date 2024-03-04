import { globalStyles } from "../styles/global";
import { COLORS } from "../styles/constants";
import { Text, TextInput, View, Button, Pressable } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function Login() {
  const [name, setName] = useState("");
  const showBackButton = router.canGoBack();
  return (
    <View
      style={[
        globalStyles.container,
        {
          justifyContent: "center",
          position: "relative",
        },
      ]}
    >
      {showBackButton && (
        <Pressable
          style={{
            position: "absolute",
            top: 10,
            right: 10,
          }}
          onPress={() => {
            router.back();
          }}
        >
          <Text style={{ backgroundColor: COLORS.dark, fontSize: 26 }}>❌</Text>
        </Pressable>
      )}
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
