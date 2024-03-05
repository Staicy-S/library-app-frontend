import { globalStyles } from "../styles/global";
import { COLORS } from "../styles/constants";
import { Text, TextInput, View, Pressable } from "react-native";
import { useState, useContext } from "react";
import { useRouter } from "expo-router";
import { UserContext } from "../context/UserContext";
import { Redirect } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Login() {
  const router = useRouter();
  const [name, setName] = useState("");
  const { user, login } = useContext(UserContext);
  const showBackButton = router.canGoBack();

  async function handleSubmit() {
    login(name);
  }

  if (user) {
    return <Redirect href="/" />;
  }

  return (
    <View
      style={[
        globalStyles.container,
        {
          backgroundColor: COLORS.background,
          justifyContent: "center",
          position: "relative",
          gap: 12,
          paddingHorizontal: 40,
        },
      ]}
    >
      {showBackButton && (
        <Pressable
          style={{
            position: "absolute",
            top: 20,
            right: 20,
          }}
          onPress={() => {
            router.back();
          }}
        >
          <MaterialCommunityIcons name="close" size={32} color={COLORS.grey} />
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
          onPress={handleSubmit}
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
