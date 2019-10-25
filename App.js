import * as React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./screens/HomeScreen";

let RootStack = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen
  }
});

export const Navigation = createAppContainer(RootStack);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;
