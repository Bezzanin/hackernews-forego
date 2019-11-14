import React, { Component } from "react";
import { ScrollView, Text, StatusBar } from "react-native";
import { connect } from "react-redux";
import { getNews, sortByScore, filterByScore } from "../store/actions";
import ListContainer from "../components/ListContainer";
import styles from "../styles";
import Sorter from "../components/Sorter";
import Filter from "../components/Filter";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Hacker News"
  };

  componentDidMount() {
    this.props.getNews();
  }

  render() {
    return (
      <ScrollView>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.title}>Top 20 News</Text>
        <Sorter sortByScore={this.props.sortByScore} />
        <Filter
          filterByScore={this.props.filterByScore}
          filterByScoreReset={this.props.getNews}
        />
        <ListContainer news={this.props.newsFeed} />
      </ScrollView>
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
  { getNews, sortByScore, filterByScore }
)(HomeScreen);
