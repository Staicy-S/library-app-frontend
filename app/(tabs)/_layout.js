import { Link, Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../styles/constants";
import { Text } from "react-native";
import { globalStyles } from "../../styles/global";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function MainTabs() {
  const { user } = useContext(UserContext);

  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.dark },
        headerTintColor: COLORS.light,
        tabBarStyle: {
          backgroundColor: COLORS.dark,
        },
        headerRight: () => {
          return user ? (
            <Text style={globalStyles.text}>{user.name}</Text>
          ) : (
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
      {user ? (
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
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
      ) : (
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIconStyle: { display: "none" },
            title: "Profile",
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
      )}
    </Tabs>
  );
}
