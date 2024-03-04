import { Link, Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../styles/constants";
import { Text } from "react-native";
import { globalStyles } from "../../styles/global";

export default function MainTabs() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.dark },
        headerTintColor: COLORS.light,
        tabBarStyle: {
          backgroundColor: COLORS.dark,
        },
        headerRight: () => {
          return (
            <Link href="login">
              <Text style={globalStyles.text}>Login</Text>
            </Link>
          );
        },
        tabBarActiveTintColor: COLORS.primary,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => {
            return <MaterialIcons name="animation" size={24} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="page2"
        options={{
          title: "Page 2",
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="animation-outline"
                size={24}
                color={color}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
