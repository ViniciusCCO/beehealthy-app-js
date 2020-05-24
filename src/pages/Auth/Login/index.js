import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Input from '../../../components/Input'
import { Container, Form, SubmitButton, SignLink, SignLinkText } from '../styled'
import { loginTrigger } from '../../../store/actions/auth-actions'

const Login = ({ navigation }) => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = () => {
    dispatch(loginTrigger({ payload: { email, password } }))
  }

  return (
    <Container>
      <Form>
        <Input
          value={email}
          autoCorrect={false}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={text => setEmail(text)}
        />
        <Input
          value={password}
          onChangeText={text => setPassword(text)}
          autoCorrect={false}
          secureTextEntry
          placeholder="senha"
        />
        <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
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
}

export default Login
