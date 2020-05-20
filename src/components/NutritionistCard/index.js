import React from 'react'
import { Text } from 'react-native'
import { ImageFace } from './styled'
import { Card, Row, MainText, Column } from './styled'

const NutritionistCard = ({ name, address, photo }) => {
  return (
    <Card>
      <Row>
        <ImageFace source={{ uri: photo }} />
        <Column>
          <MainText>{name}</MainText>
          <Text>{address}</Text>
        </Column>
      </Row>
      <Row />
    </Card>
  )
}

export default NutritionistCard
