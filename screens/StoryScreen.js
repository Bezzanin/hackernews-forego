import React, { Component } from "react";
import { WebView } from "react-native-webview";

class StoryScreen extends Component {
  render() {
    const { uri } = this.props.navigation.state.params;
    return <WebView source={{ uri: uri }} style={{ marginTop: 20 }} />;
  }
}

export default StoryScreen;
