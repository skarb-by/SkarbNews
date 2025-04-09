import { StyleSheet, Image } from "react-native";

const PostImages = ({ imageUrl }) => {
  return <Image style={styles.image} source={{ uri: imageUrl }} />;
};

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 7,
  },
});

export default PostImages;
