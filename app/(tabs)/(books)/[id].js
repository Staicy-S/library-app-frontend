import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useFocusEffect } from "expo-router";
import { useCallback, useEffect, useState, useContext } from "react";
import axios from "axios";
import { globalStyles } from "../../../styles/global";
import { COLORS } from "../../../styles/constants";
import Animated, {
  useSharedValue,
  withTiming,
  withRepeat,
  useAnimatedStyle,
  Easing,
  cancelAnimation,
} from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { AutoHeightImage } from "../../../components/AutoHeightImage";
import { StyledButton } from "../../../components/StyledButton";
import { UserContext } from "../../../context/UserContext";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export default function BookDetails() {
  const { user } = useContext(UserContext);
  const scale = useSharedValue(1);
  const { id } = useLocalSearchParams();
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  useFocusEffect(
    useCallback(() => {
      async function loadBook() {
        try {
          setIsLoading(true);
          const { data } = await axios.get(`${apiUrl}/books/${id}`);
          setBook(data);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      }
      loadBook();
    }, [id])
  );

  useEffect(() => {
    if (!book) {
      scale.value = withRepeat(
        withTiming(1.8, {
          duration: 500,
          easing: Easing.linear,
        }),
        -1,
        true
      );
    } else {
      navigation.setOptions({
        title: book.title,
      });
    }
    return () => {
      cancelAnimation(scale);
    };
  }, [book]);
  if (!book) {
    return (
      <View
        style={[
          globalStyles.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <Animated.View style={[styles.avatar, animatedStyle]}>
          <MaterialCommunityIcons
            name="timer-sand"
            size={24}
            color={COLORS.text}
          />
        </Animated.View>
      </View>
    );
  }
  return (
    <View
      style={[
        globalStyles.container,
        { padding: 20, alignItems: "center", gap: 20 },
      ]}
    >
      <AutoHeightImage
        source={book.cover_image}
        style={{
          width: "65%",
        }}
        contentFit="contain"
      />
      <StyledButton
        disabled={!user}
        title="Borrow"
        containerStyle={{ minWidth: "65%" }}
      />
      {!user ? (
        <Text style={globalStyles.text}>
          You need to login to borrow this book.
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    height: 48,
    aspectRatio: 1,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
});
