import { createStackNavigator } from "react-navigation-@react-navigation/native-stack";
import { createAppContainer } from "react-navigation";
import WelcomeScreen from "../screens/WelcomeScreen.js";
import LoginScreen from "../screens/LoginScreen.js";
import SignupScreen from "../screens/SignupScreen.js";
// import HomeScreen from "../screens/HomeScreen";

const screens = {
  WelcomeScreen: {
    screen: WelcomeScreen,
  },
  LoginScreen: {
    screen: LoginScreen,
  },
  SignupScreen: {
    screen: SignupScreen,
  },
  //   HomeScreen: {
  //     screen: HomeScreen,
  //   },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
