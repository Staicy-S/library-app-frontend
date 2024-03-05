import { Stack } from "expo-router";
import { UserProvider } from "../context/UserContext";
import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_400Regular_Italic,
  NotoSans_700Bold,
  NotoSans_700Bold_Italic,
} from "@expo-google-fonts/noto-sans";

export default function RootStack() {
  let [fontsLoaded, fontError] = useFonts({
    NotoSans_400Regular,
    NotoSans_400Regular_Italic,
    NotoSans_700Bold,
    NotoSans_700Bold_Italic,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
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
