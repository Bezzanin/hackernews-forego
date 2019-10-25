import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import { connect } from "react-redux";
import { getNews } from "../store/actions";
import ListContainer from "../components/ListContainer";
import styles from "../styles";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Hacker News"
  };

  componentDidMount() {
    this.props.getNews();
  }

  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.title}>Top 20 News</Text>
        <ListContainer news={this.props.newsFeed} />
      </View>
    );
  }
}

export default connect(
  //this is the mapStateToProps and mapDispatchToProps functions in simplified way
  (state, ownProps) => ({
    newsFeed: state.defaultReducer.newsFeed,
    errorMessage: state.defaultReducer.errorMessage,
    isLoading: state.defaultReducer.isLoading
  }),
  { getNews }
)(HomeScreen);
