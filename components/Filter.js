import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import styles from "../styles";
import { Slider } from "react-native-elements";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      max: 2000,
      visible: false
    };
  }
  render() {
    return (
      <View style={styles.filterContainer}>
        <Button
          title="Filters"
          onPress={() => this.setState({ visible: !this.state.visible })}
        />
        {this.state.visible && (
          <View>
            <Text style={styles.tableText}>
              Minimum Score: {this.state.min}
            </Text>
            <Slider
              step={1}
              value={this.state.min}
              minimumValue={0}
              maximumValue={2000}
              onValueChange={value => this.setState({ min: value })}
            />
            <Text style={styles.tableText}>MaximumScore: {this.state.max}</Text>
            <Slider
              step={1}
              value={this.state.max}
              minimumValue={0}
              maximumValue={2000}
              onValueChange={value => this.setState({ max: value })}
            />
            <View style={styles.rowButtons}>
              <Button
                title="Apply"
                onPress={() =>
                  this.props.filterByScore(this.state.min, this.state.max)
                }
              />
              <Button
                title="Reset"
                onPress={() => {
                  this.props.filterByScoreReset();
                  this.setState({
                    min: 0,
                    max: 2000
                  });
                }}
              />
            </View>
          </View>
        )}
      </View>
    );
  }
}

export default Filter;
