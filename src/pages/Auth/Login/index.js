import React, { useState } from 'react'
import { FlatList } from 'react-native'
import RadioButton from '../../../components/RadioButton'
import { useDispatch } from 'react-redux'
import Input from '../../../components/Input'
import { Container, Form, SubmitButton, SignLink, SignLinkText, Row } from '../styled'
import { loginTrigger } from '../../../store/actions/auth-actions'
import types from '../types'

const Login = ({ navigation }) => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [selected, setSelected] = useState([])

  const handleSubmit = () => {
    dispatch(loginTrigger({ payload: { email, password, type: selected.type } }))
  }

  const handleSelect = id => {
    types.forEach(i => (i.selected = false))

    types.forEach(item => {
      if (item.id === id) {
        item.selected = !item.selected
        setSelected(item)
      }
    })
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

        <Row>
          <FlatList
            data={types}
            renderItem={({ item }) => {
              return (
                <RadioButton
                  name={item.label}
                  selected={item.selected}
                  onPress={() => handleSelect(item.id)}
                />
              )
            }}
            keyExtractor={item => item.id}
          />
        </Row>
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
