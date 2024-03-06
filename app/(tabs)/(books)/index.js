import { View, FlatList } from "react-native";
import { globalStyles } from "../../../styles/global";
import axios from "axios";
import { useState } from "react";
import { BookListItem } from "../../../components/BookListItem";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export default function Home() {
  const [books, setBooks] = useState([]);

  useFocusEffect(
    useCallback(() => {
      async function loadBooks() {
        try {
          const { data } = await axios.get(`${apiUrl}/books`);
          setBooks(data);
        } catch (error) {
          console.log(error);
        } finally {
          console.log("finish loading");
        }
      }
      loadBooks();
    }, [])
  );

  return (
    <View style={[globalStyles.container, { paddingVertical: 0 }]}>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 12, paddingVertical: 12 }}
          data={books}
          keyExtractor={(book) => book.id}
          renderItem={({ item }) => {
            return <BookListItem book={item} />;
          }}
        />
      </View>
    </View>
  );
}
