import { Text, View } from "react-native";
import { UserContext } from "../../context/UserContext";
import { useContext, useEffect } from "react";
import { globalStyles } from "../../styles/global";
import { COLORS } from "../../styles/constants";
import { router } from "expo-router";

export default function Profile() {
  const { user, login } = useContext(UserContext);

  useEffect(() => {
    router.push("/");
  }, [user]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Profile</Text>
      <Text style={globalStyles.text}>Welcome {user?.name}</Text>
    </View>
  );
}
