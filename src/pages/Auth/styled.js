import styled from 'styled-components/native'

import Button from '../../components/Button'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`

export const SignLinkText = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 16px;
`
export const Row = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
