import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FlatList, Text, TextInput } from 'react-native'
import Input from '../../../components/Input'
import { Container, Form, SubmitButton, SignLink, SignLinkText } from '../styled'
import { Row } from './styled'
import { signinTrigger } from '../../../store/actions/auth-actions'
import RadioButton from '../../../components/RadioButton'
import types from './types'

const SignIn = () => {
  const dispatch = useDispatch()

  const [selected, setSelected] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSelect = id => {
    types.forEach(i => (i.selected = false))

    types.forEach(item => {
      if (item.id === id) {
        item.selected = !item.selected
        setSelected(item)
      }
    })
  }

  const handleSubmit = () => {
    dispatch(signinTrigger({ payload: { name, email, password, type: selected.type } }))
  }

  return (
    <Container>
      <Form>
        <Input
          value={name}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Nome"
          onChangeText={text => setName(text)}
        />
        <Input
          value={email}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={text => setEmail(text)}
        />
        <Input
          value={password}
          autoCorrect={false}
          secureTextEntry
          placeholder="senha"
          onChangeText={text => setPassword(text)}
        />

        <Text> Você está se cadastrando no BeeHealthy para ser?</Text>
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
    </Container>
  )
}

export default SignIn
