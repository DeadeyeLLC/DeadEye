import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator         from './MainTabNavigator';
import AuthLoadingScreen        from '../screens/AuthLoadingScreen';
import AuthLoginScreen          from '../screens/AuthLoginScreen';
import AuthRegisterScreen       from '../screens/AuthRegisterScreen';
import AuthForgotPasswordScreen from '../screens/AuthForgotPasswordScreen';

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: MainTabNavigator,
    Auth: AuthLoginScreen,
    AuthRegister: AuthRegisterScreen,
    AuthForgotPassword: AuthForgotPasswordScreen

  },
  {
    initialRouteName: 'AuthLoading',
  }
));
