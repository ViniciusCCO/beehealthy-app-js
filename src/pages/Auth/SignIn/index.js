import React from 'react'

import Input from '../../../components/Input'
import { Container, Form, SubmitButton, SignLink, SignLinkText } from '../styled'

const SignIn = () => (
  <Container>
    <Form>
      <Input autoCorrect={false} autoCapitalize="none" placeholder="Nome" />
      <Input autoCorrect={false} autoCapitalize="none" placeholder="Email" />
      <Input autoCorrect={false} secureTextEntry placeholder="senha" />
      <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
    </Form>
  </Container>
)

export default SignIn
