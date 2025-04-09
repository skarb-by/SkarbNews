import { StyleSheet, Text, View } from "react-native";

const PostTitle = ({ title }) => {
  return <Text style={styles.text}>{title}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 700,
  },
});

export default PostTitle;
