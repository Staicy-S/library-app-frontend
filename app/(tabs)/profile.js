import { Pressable, Text, View } from "react-native";
import { UserContext } from "../../context/UserContext";
import { useContext, useEffect } from "react";
import { globalStyles } from "../../styles/global";
import { Redirect } from "expo-router";

export default function Profile() {
  const { user, logout } = useContext(UserContext);

  if (!user) {
    return <Redirect href="/" />;
  }

  return (
    <View style={[globalStyles.container, globalStyles.spacing]}>
      <Text style={globalStyles.text}>Welcome {user?.name}</Text>
      <Pressable onPress={logout} style={globalStyles.submitPressable}>
        <Text style={[globalStyles.text, globalStyles.submitPressableText]}>
          Logout
        </Text>
      </Pressable>
    </View>
  );
}
