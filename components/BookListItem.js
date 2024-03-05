import { Pressable, View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { COLORS, FONTS } from "../styles/constants";
import { globalStyles } from "../styles/global";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

export function BookListItem({ book }) {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <Link asChild href={`/${book.id}`}>
      <Pressable
        onPressIn={() => {
          setIsPressed(true);
        }}
        onPressOut={() => {
          setIsPressed(false);
        }}
      >
        <View
          style={[
            styles.itemContainer,
            isPressed && { backgroundColor: "#182235" },
          ]}
        >
          <View style={styles.avatar}>
            <Feather name="book" size={24} color={COLORS.text} />
          </View>
          <View style={{ paddingRight: 12, width: "60%" }}>
            <Text
              style={[
                globalStyles.text,
                {
                  fontFamily: FONTS.bold,
                },
              ]}
            >
              {book.title}
            </Text>
            <Text
              style={[
                globalStyles.text,
                {
                  fontFamily: FONTS.regularItalic,
                  fontSize: 11,
                },
              ]}
            >
              {book.author_name}
            </Text>
            <Text
              style={[
                globalStyles.text,
                {
                  fontFamily: FONTS.regularItalic,
                  fontSize: 11,
                },
              ]}
            >
              {book.publishing_year}
            </Text>
          </View>
          <View style={[styles.availableCopiesContainer]}>
            <Text
              style={[
                globalStyles.text,
                {
                  fontSize: 12,
                  color: COLORS.text,
                  backgroundColor: "#5f6776",
                  fontFamily: FONTS.bold,
                  padding: 3,
                  paddingHorizontal: 8,
                  borderRadius: 12,
                  overflow: "hidden",
                },
              ]}
            >
              4 copies left
            </Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    position: "relative",
    padding: 12,
    paddingVertical: 36,
    borderRadius: 12,
    backgroundColor: COLORS.background,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    flexDirection: "row",
    gap: 12,
  },
  availableCopiesContainer: {
    position: "absolute",
    right: 16,
    top: 16,
  },
  avatar: {
    height: 48,
    aspectRatio: 1,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
});
