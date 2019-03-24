import AddressScreen from "./AddressScreen";
import PaymentScreen from "./PaymentScreen";
import CompleteScreen from "./CompleteScreen";
import { createStackNavigator, createAppContainer } from "react-navigation";

const Navigator = createStackNavigator(
  {
    AddressScreen: { screen: AddressScreen },
    PaymentScreen: { screen: PaymentScreen },
    CompleteScreen: { screen: CompleteScreen }
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(Navigator);
