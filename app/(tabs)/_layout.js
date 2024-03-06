import { Link, Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../styles/constants";
import { Text, View } from "react-native";
import { globalStyles } from "../../styles/global";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function MainTabs() {
  const { user } = useContext(UserContext);

  return (
    <Tabs
      screenOptions={{
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
            <View style={{ paddingRight: 0 }}>
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
      <Tabs.Screen
        name="(books)"
        options={{
          headerShown: false,
          title: "Library",
          tabBarLabel: "Library",
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="bookshelf"
                size={24}
                color={color}
              />
            );
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
                <MaterialIcons name="person-outline" size={24} color={color} />
              );
            },
          }}
        />
      ) : (
        <Tabs.Screen
          name="profile"
          options={{
            href: user ? "profile" : null,
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
