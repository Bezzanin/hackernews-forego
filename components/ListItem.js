import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import styles from "../styles";
import moment from "moment";

export default function ListItem({
  item,
  onPressStoryLink,
  onPressCreatorLink
}) {
  const { title, by, time, score, url } = item;
  return (
    <View>
      <Card
        containerStyle={styles.cardContainer}
        title={title}
        titleStyle={styles.cardTitle}
      >
        <View style={styles.row}>
          <Text>Created by: </Text>
          <TouchableOpacity onPress={() => onPressCreatorLink(by)}>
            <Text style={styles.cardLink}>{by}</Text>
          </TouchableOpacity>
        </View>
        <Text>Published: {moment(time).format("MMMM Do YYYY, h:mm:ss a")}</Text>
        <Text>Score: {score}</Text>
        <Button
          onPress={() => onPressStoryLink(url)}
          title={"Read More ..."}
          style={styles.cardLink}
        />
      </Card>
    </View>
  );
}
