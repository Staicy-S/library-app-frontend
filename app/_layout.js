import { Stack } from "expo-router";
import { UserProvider } from "../context/UserContext";

export default function RootStack() {
  return (
    <UserProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="login" options={{ presentation: "modal" }} />
      </Stack>
    </UserProvider>
  );
}
