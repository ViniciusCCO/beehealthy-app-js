import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components'

export const Container = styled(RectButton)`
  height: 46px;
  background: ${props => (props.color ? props.color : 'grey')};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`

export const Text = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 16px;
`
