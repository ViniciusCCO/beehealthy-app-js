import React from 'react'

import Input from '../../../components/Input'
import { Form, Container, SubmitButton, SignLink, SignLinkText } from '../styled'

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
      <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
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
Login.navigationOptions = { headerShown: false }

export default Login
