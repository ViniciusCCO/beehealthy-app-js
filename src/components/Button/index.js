import React from 'react'

import { Container, Text } from './styled'

const Button = ({ children, ...rest }) => (
  <Container {...rest}>
    <Text>{children}</Text>
  </Container>
)

export default Button
