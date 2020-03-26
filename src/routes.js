import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Login from './pages/Auth/Login'
import SignIn from './pages/Auth/SignIn'
import Main from './pages/Main'

const authRoutes = () =>
  createStackNavigator({
    Login,
    SignIn,
  })

const appRoutes = () =>
  createBottomTabNavigator({
    Main,
  })

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
