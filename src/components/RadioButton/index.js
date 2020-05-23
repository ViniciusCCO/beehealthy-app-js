import React from 'react'
import RB from 'react-native-radio-button'
import { Text } from 'react-native'
import { Row, Column } from './styled'

const RadioButton = ({ selected, name, onPress }) => {
  return (
    <Column>
      <Row>
        <RB
          isSelected={selected}
          innerColor={'grey'}
          outerColor={'grey'}
          size={13}
          onPress={onPress}
        />
        <Text>{name}</Text>
      </Row>
    </Column>
  )
}

export default RadioButton
