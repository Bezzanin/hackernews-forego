import React, { Component } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import ListItem from "./ListItem";
import { withNavigation } from "react-navigation";

class ListContainer extends Component {
  goToSory = uri => {
    this.props.navigation.navigate("StoryScreen", {
      uri: uri
    });
  };
  goToCreator = id => {
    this.props.navigation.navigate("ProfileScreen", {
      id: id
    });
  };

  render() {
    const { news } = this.props;
    return (
      <ScrollView>
        {news ? (
          news.map((item, key) => {
            return (
              <ListItem
                key={key}
                item={item}
                onPressStoryLink={this.goToSory}
                onPressCreatorLink={this.goToCreator}
              />
            );
          })
        ) : (
          <div className="RSSItem">
            <p>No data availabe</p>
          </div>
        )}
      </ScrollView>
    );
  }
}

export default withNavigation(ListContainer);
