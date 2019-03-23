import { createAppContainer, createStackNavigator } from "react-navigation";
import Selection from "./Selection";

export default createAppContainer(
  createStackNavigator({
    Selection: {
      screen: Selection
    }
  })
);
