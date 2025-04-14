import {
  View,
  StyleSheet,
  Alert,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { PostImages } from "./PostImages";
import { PostTitle } from "./PostTitle";
import { PostDate } from "./PostDate";
import { Loading } from "./Loading";
import { ENV_VAR } from "@env";

export const Home = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState();
  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${ENV_VAR}`)
      .then(({ data }) => {
        setItems(data.articles);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка", "Не удалось получить статьи");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(fetchPosts, []);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("FullPost", item)}
          >
            <View style={styles.post}>
              <PostImages urlToImage={item.urlToImage}> </PostImages>
              <View style={styles.view}>
                <PostTitle title={item.title}> </PostTitle>
                <PostDate publishedAt={item.publishedAt}> </PostDate>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
  },
  view: {
    flex: 1,
    justifyContent: "center",
  },
});
