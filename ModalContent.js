import AddressScreen from './AddressScreen';
import PaymentScreen from './PaymentScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

 
const Navigator = createStackNavigator(
  {
    AddressScreen: { screen: AddressScreen },
    PaymentScreen: { screen: PaymentScreen },
  },
  {
    headerMode: 'none',
  },
)

export default createAppContainer(Navigator);