import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Card = styled.View`
  margin: 10px;
  border-bottom-width: 3px;
  border-right-width: 2px;
  border-color: #ebe8ed;
`

export const ImageFace = styled.Image`
  width: 70px;
  height: 70px;
  margin: 10px;
  align-self: center;
  border-radius: 50px;
`

export const Row = styled.View`
  flex: 1;
  flex-direction: row;
`
export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  flex-direction: column;
`

export const RowCenter = styled.View`
  flex: 1;
  flex-direction: row;
  background-color:black;
`

export const Column = styled.View`
  flex: 1;
  flex-direction: column;
`

export const MainText = styled.Text`
  margin: 5px 0 0 0;
  font-weight: bold;
  font-size: 20px;
  background-color:black;
  color:white;
`
