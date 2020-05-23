import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Text,View,FlatList,Button} from 'react-native'
import {Card, Row, MainText, Column,Container,RowCenter,ImageFace} from './styled'
import RadioButton from '../../components/RadioButton'
import types from './types'
import { signinTrigger } from '../../store/actions/auth-actions'

remove_post_on_list = (deletePostId) => {
  this.setState({
    postList: this.state.postList.filter(item => item.post_id != deletePostId)
  })
}

const AppointmentCard = ({dia, nutricionist, address, photo, JSON}) => {
  
  const dispatch = useDispatch()
  const [selected, setSelected] = useState([])

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
    console.log('chegou no handle submit')
    dispatch(signinTrigger({ payload: { nutricionist, email, password, type: selected.type } }))
  }

    return (
        <Card>
            <RowCenter>
                <MainText>{dia}</MainText>
            </RowCenter>
            <Row>
                <ImageFace source={{
                        uri: photo
                    }}/>
                <Column>
                    <Text>{nutricionist}</Text>
                    <Text>{address}</Text>
                </Column>
            </Row>
            <Row>
                <Column>
                    <FlatList
                        keyExtractor={item => item.id}
                        data={types}
                        renderItem={({item}) => {
                            return (<RadioButton 
                              name={item.type}
                              selected={item.selected}
                              onPress={() => handleSelect(item.id)}/>)
                        }}
                        keyExtractor={item => item.id}/>
                </Column>
            </Row>
            <Row><Text/></Row>
            <Row/>
              <Row>
              <Column>
                <Button 
                onPress={() => handleSubmit()}
                title='Marcar'
                /> 
                </Column>
              </Row>
        </Card>
    )
}

export default AppointmentCard
