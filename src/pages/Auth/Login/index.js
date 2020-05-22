import React from 'react'

import Input from '../../../components/Input'
import { Container, Form, SubmitButton, SignLink, SignLinkText } from '../styled'

const Login = ({ navigation }) => (
  <Container>
    <Form>
      <Input
        autoCorrect={false}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder="Email"
      />
      <Input autoCorrect={false} secureTextEntry placeholder="senha" />
      <SubmitButton onPress={() => {navigation.navigate('SearchNutritionist')}}>Acessar</SubmitButton>
    </Form>

    <SignLink
      onPress={() => {
        navigation.navigate('SignIn')
      }}
    >
      <SignLinkText>Criar conta</SignLinkText>
    </SignLink>
  </Container>
)

export default Login
