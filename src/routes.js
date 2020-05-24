import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Login from './pages/Auth/Login'
import SignIn from './pages/Auth/SignIn'
import Main from './pages/Main'
import SearchNutritionist from './pages/Patient/SearchNutritionist'

const authRoutes = () =>
  createStackNavigator(
    {
      Login: { screen: Login, navigationOptions: { headerShown: false } },
      SignIn: {
        screen: SignIn,
        navigationOptions: {
          headerTitle: 'Sign In',
          headerTitleAlign: 'center',
          headerTintColor: 'black',
        },
      },
    },
    {
      initialRouteName: 'Login',
    }
  )

const appRoutes = () =>
  createSwitchNavigator(
    {
      Main,
      SearchNutritionist,
    },
    { initialRouteName: 'SearchNutritionist' }
  )

export default token =>
  createAppContainer(
    createSwitchNavigator(
      {
        Auth: authRoutes(),
        Main: appRoutes(),
      },
      {
        initialRouteName: token ? 'Main' : 'Auth',
      }
    )
  )
