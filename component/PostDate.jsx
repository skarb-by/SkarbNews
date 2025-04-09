import { StyleSheet, Text } from "react-native";

const PostDate = ({ createdAt }) => {
  return <Text style={styles.text}>{createdAt}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.4)",
    marginTop: 3,
  },
});

export default PostDate;
