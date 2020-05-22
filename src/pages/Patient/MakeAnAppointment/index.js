import React from 'react'
import SearchBar from '../../../components/SearchBar'
import NutritionistCard from '../../../components/NutritionistCard'
import { FlatList,Text } from 'react-native'
import { Container, List } from './styled'

const data = [
  {
    id: 1,
    name: 'Nome aqui',
    photo:
      'https://osegredo.com.br/wp-content/uploads/2018/02/as-pessoas-de-cora%C3%A7%C3%B5es-de-ouro-830x450.jpg',
    address: 'Rua do Nome aqui, numero não interessa',
  }
]
const MakeAnAppointment = ({navigation}) => {
    const { nome } = navigation.state.params;
  return (
    <Container>
      <Text>{nome}</Text>
      
    </Container>
  )
}

export default MakeAnAppointment
