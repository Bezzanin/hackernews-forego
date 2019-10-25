import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import { connect } from "react-redux";
import { getUser } from "../store/actions";
import styles from "../styles";
import moment from "moment";

class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.id
  });

  componentDidMount() {
    const { id } = this.props.navigation.state.params;
    this.props.getUser(id);
  }
  render() {
    const { id, created, karma, submitted } = this.props.currentUser;
    return (
      <View>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.tableText}>Name(id): {id}</Text>
        <Text style={styles.tableText}>
          Created: {moment(created).format("L")}
        </Text>
        <Text style={styles.tableText}>Karma: {karma}</Text>
        <Text style={styles.tableText}>
          Submitted stories: {submitted && submitted.length}
        </Text>
      </View>
    );
  }
}

export default connect(
  //this is the mapStateToProps and mapDispatchToProps functions in simplified way
  (state, ownProps) => ({
    currentUser: state.defaultReducer.currentUser,
    errorMessage: state.defaultReducer.errorMessage
  }),
  { getUser }
)(ProfileScreen);
