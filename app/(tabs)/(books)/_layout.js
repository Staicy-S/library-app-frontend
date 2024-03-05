import { Stack } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../../styles/constants";
import { globalStyles } from "../../../styles/global";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function BooksStack() {
  const { user } = useContext(UserContext);
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        tabBarIcon: ({ color }) => {
          return (
            <MaterialCommunityIcons name="bookshelf" size={24} color={color} />
          );
        },
        tabBarLabel: "Library",
        headerShadowVisible: false,
        headerStyle: { backgroundColor: COLORS.background },
        headerTitleStyle: [globalStyles.heading],
        headerTintColor: COLORS.text,
        tabBarStyle: {
          borderTopColor: COLORS.grey,
          borderTopWidth: 0,
          backgroundColor: COLORS.background,
        },
        headerRight: () => {
          return user ? null : (
            <View style={{ paddingRight: 20 }}>
              <Link href="login">
                <Text style={globalStyles.text}>Login</Text>
              </Link>
            </View>
          );
        },
        tabBarInactiveTintColor: COLORS.grey,
        tabBarActiveTintColor: COLORS.text,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Library",
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: "Details",
          headerBackTitleVisible: false,
        }}
      />
    </Stack>
  );
}
