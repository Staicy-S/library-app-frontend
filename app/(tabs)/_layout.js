import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../styles/constants";

export default function MainTabs() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.dark },
        headerTintColor: COLORS.light,
        tabBarStyle: {
          backgroundColor: COLORS.dark,
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
