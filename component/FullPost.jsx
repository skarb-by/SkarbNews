import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import Loading from "./Loading";

const FullPost = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState();

  React.useEffect(() => {
    axios
      .get("https://67f3f8f0cbef97f40d2ce28c.mockapi.io/articles/1")
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка", "Не удалось получить статью.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={styles.view}>
      <Image style={styles.PostImage} source={{ uri: data.imageUrl }}/>

      <Text style={styles.PostText}>{data.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  PostImage: {
    width: "100%",
    height: "50%",
    resizeMode: 'stretch',
    borderRadius: 10,

    marginBottom: 20,
    justifyContent: "center",
  },
  PostText: {
    fontSize: 18,
    lineHeight: 24,
  },
  view: {
    padding: 20,
  },
  loadingView: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 20,
  },
});

export default FullPost;
