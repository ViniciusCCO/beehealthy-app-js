import React, { forwardRef } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Input as StyledInput, Container } from './styled'

const Input = ({ icon, iconColor, side, onClick, ...rest }, ref) => (
  <Container>
    <StyledInput {...rest} ref={ref} />
    {icon && (
      <TouchableOpacity>
        <Icon name={icon} size={30} color={iconColor} onPress={onClick} />
      </TouchableOpacity>
    )}
  </Container>
)

export default forwardRef(Input)
