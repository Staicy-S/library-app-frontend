import { Text, View, FlatList, Button } from "react-native";
import { globalStyles } from "../../styles/global";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "expo-router";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;
console.log(apiUrl);

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function loadBooks() {
      try {
        const { data } = await axios.get(`${apiUrl}/books`);
        setBooks(data);
        console.log(data);
      } catch (error) {
        // console.log(error);
      } finally {
        console.log("finish loading");
      }
    }
    loadBooks();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>📚 Library App</Text>
      <FlatList
        data={books}
        keyExtractor={(book) => book.id}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <View>
              <Text style={globalStyles.text}>{item.title}</Text>
            </View>
          );
        }}
      />
      <Link href="login">
        <Text style={globalStyles.text}>Login</Text>
      </Link>
    </View>
  );
}
