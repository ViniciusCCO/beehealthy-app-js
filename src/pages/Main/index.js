import React from 'react'
import { Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Main = ({ navigation }) => <Text>main paaage</Text>

Main.navigationOptions = { tabBarIcon: () => <Icon name="event" size={30} color="blue" /> }

export default Main
