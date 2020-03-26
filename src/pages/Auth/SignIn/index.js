import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import authActions from '../../../actions/auth-actions'
import Input from '../../../components/Input'
import { Container, Form, SubmitButton } from '../styled'

const SignIn = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch({ type: authActions.signin.TRIGGER, payload: { name, email, password } })
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          value={name}
          onChangeText={setName}
          placeholder="Nome"
        />
        <Input
          autoCorrect={false}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
        />
        <Input
          autoCorrect={false}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholder="senha"
        />
        <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
      </Form>
    </Container>
  )
}

SignIn.navigationOptions = {
  headerTitle: 'Sign In',
  headerTitleAlign: 'center',
  headerTintColor: 'black',
}

export default SignIn
