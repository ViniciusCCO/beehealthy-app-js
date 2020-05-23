import React from 'react'
import SearchBar from '../../../components/SearchBar'
import NutritionistCard from '../../../components/NutritionistCard'
import { FlatList,TouchableOpacity } from 'react-native'
import { Container, List } from './styled'

const data = [
  {
    id: 1,
    name: 'Gabriel Pereira ',
    photo:
      'https://osegredo.com.br/wp-content/uploads/2018/02/as-pessoas-de-cora%C3%A7%C3%B5es-de-ouro-830x450.jpg',
    address: 'Rua dos bobos, numero: 0',
  },
  {
    id: 1,
    name: 'Nome aqui',
    photo:
      'https://osegredo.com.br/wp-content/uploads/2018/02/as-pessoas-de-cora%C3%A7%C3%B5es-de-ouro-830x450.jpg',
    address: 'Rua do Nome aqui, numero não interessa',
  },
  {
    id: 1,
    name: 'Nome aqui',
    photo:
      'https://osegredo.com.br/wp-content/uploads/2018/02/as-pessoas-de-cora%C3%A7%C3%B5es-de-ouro-830x450.jpg',
    address: 'Rua do Nome aqui, numero não interessa',
  },
  {
    id: 1,
    name: 'Nome aqui',
    photo:
      'https://osegredo.com.br/wp-content/uploads/2018/02/as-pessoas-de-cora%C3%A7%C3%B5es-de-ouro-830x450.jpg',
    address: 'Rua do Nome aqui, numero não interessa',
  },
  {
    id: 1,
    name: 'Nome aqui',
    photo:
      'https://osegredo.com.br/wp-content/uploads/2018/02/as-pessoas-de-cora%C3%A7%C3%B5es-de-ouro-830x450.jpg',
    address: 'Rua do Nome aqui, numero não interessa',
  },
  {
    id: 1,
    name: 'Nome aqui',
    photo:
      'https://osegredo.com.br/wp-content/uploads/2018/02/as-pessoas-de-cora%C3%A7%C3%B5es-de-ouro-830x450.jpg',
    address: 'Rua do Nome aqui, numero não interessa',
  },
  {
    id: 1,
    name: 'Nome aqui',
    photo:
      'https://osegredo.com.br/wp-content/uploads/2018/02/as-pessoas-de-cora%C3%A7%C3%B5es-de-ouro-830x450.jpg',
    address: 'Rua do Nome aqui, numero não interessa',
  },
  {
    id: 1,
    name: 'Nome aqui',
    photo:
      'https://osegredo.com.br/wp-content/uploads/2018/02/as-pessoas-de-cora%C3%A7%C3%B5es-de-ouro-830x450.jpg',
    address: 'Rua do Nome aqui, numero não interessa',
  },
  {
    id: 1,
    name: 'Nome aqui',
    photo:
      'https://osegredo.com.br/wp-content/uploads/2018/02/as-pessoas-de-cora%C3%A7%C3%B5es-de-ouro-830x450.jpg',
    address: 'Rua do Nome aqui, numero não interessa',
  },
  {
    id: 1,
    name: 'Nome aqui',
    photo:
      'https://osegredo.com.br/wp-content/uploads/2018/02/as-pessoas-de-cora%C3%A7%C3%B5es-de-ouro-830x450.jpg',
    address: 'Rua do Nome aqui, numero não interessa',
  },
  {
    id: 1,
    name: 'Nome aqui',
    photo:
      'https://osegredo.com.br/wp-content/uploads/2018/02/as-pessoas-de-cora%C3%A7%C3%B5es-de-ouro-830x450.jpg',
    address: 'Rua do Nome aqui, numero não interessa',
  },
  {
    id: 1,
    name: 'Nome aqui',
    photo:
      'https://osegredo.com.br/wp-content/uploads/2018/02/as-pessoas-de-cora%C3%A7%C3%B5es-de-ouro-830x450.jpg',
    address: 'Rua do Nome aqui, numero não interessa',
  },
  {
    id: 1,
    name: 'Nome aqui',
    photo:
      'https://osegredo.com.br/wp-content/uploads/2018/02/as-pessoas-de-cora%C3%A7%C3%B5es-de-ouro-830x450.jpg',
    address: 'Rua do Nome aqui, numero não interessa',
  },
]
const SearchNutritionist = ({navigation}) => {
    return (
        <Container>
            <SearchBar/>
            <FlatList
                keyExtractor={item => item.id}
                data={data}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('MakeAnAppointment', {
                                    id: item.id,
                                    nutricionist: item.name,
                                    address: item.address,
                                    photo: item.photo
                                })
                            }}>
                            <NutritionistCard name={item.name} photo={item.photo} address={item.address}/>
                        </TouchableOpacity>
                    )
                }}
                onEndReached={() => console.log('chegou no fim')}/>
        </Container>
    )
}

export default SearchNutritionist
