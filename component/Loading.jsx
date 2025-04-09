import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

const Loading = () => {
  return (
    <View style={styles.loadingView}>
      <ActivityIndicator size="large" color="red" />
      <Text style={styles.loadingText}>Загрузка...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingView: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 20,
  },
});

export default Loading;
