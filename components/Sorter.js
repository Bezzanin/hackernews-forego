import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import styles from "../styles";

export default function Sorter({ sortByScore }) {
  return (
    <View style={styles.row}>
      <Text style={styles.tableText}>Sort by:</Text>
      <Button title="Score(Desc)" onPress={() => sortByScore("des")} />
      <Button title="Score(Asc)" onPress={() => sortByScore("asc")} />
    </View>
  );
}
