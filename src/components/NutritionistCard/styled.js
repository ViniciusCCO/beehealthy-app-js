import styled from 'styled-components/native'

export const Card = styled.View`
  flex: 1;
  border-radius: 10px;
  margin: 10px;
  height: 90px;
  margin-top: 20px;
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

export const Column = styled.View`
  flex: 1;
  flex-direction: column;
`

export const MainText = styled.Text`
  margin: 5px 0 0 0;
  font-weight: bold;
  font-size: 20px;
`
