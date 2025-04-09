import {
  View,
  StyleSheet,
  Alert,
  FlatList,
  ActivityIndicator,
  Text,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import React from "react";
import axios from "axios";
import PostImages from "./PostImages";
import PostTitle from "./PostTitle";
import PostDate from "./PostDate";
import Loading from "./Loading";

const Home = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState();
  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get("https://67f3f8f0cbef97f40d2ce28c.mockapi.io/articles")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка", "Не удалось получить статьи");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  React.useEffect(fetchPosts, []);
  if (isLoading) {
    return <Loading />
  }

  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => alert('TOUCHED')}>
          <View style={styles.post}>
            <PostImages imageUrl={item.imageUrl}> </PostImages>
            <View style={styles.view}>
              <PostTitle title={item.title}> </PostTitle>
              <PostDate createdAt={item.createdAt}> </PostDate>
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

export default Home;
