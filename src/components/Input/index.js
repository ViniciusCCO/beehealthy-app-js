import React, { forwardRef } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Input as StyledInput, Container } from './styled'

const Input = ({ icon, iconColor, ...rest }, ref) => (
  <Container>
    {icon && <Icon name={icon} size={30} color={iconColor} />}
    <StyledInput {...rest} ref={ref} />
  </Container>
)

export default forwardRef(Input)
