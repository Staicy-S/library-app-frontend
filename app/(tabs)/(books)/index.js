import { Text, View, FlatList, Button } from "react-native";
import { globalStyles } from "../../../styles/global";
import axios from "axios";
import { useState, useEffect } from "react";
import { BookListItem } from "../../../components/BookListItem";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function loadBooks() {
      try {
        const { data } = await axios.get(`${apiUrl}/books`);
        setBooks(data);
        // console.log(data);
      } catch (error) {
        // console.log(error);
      } finally {
        console.log("finish loading");
      }
    }
    loadBooks();
  }, []);

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
