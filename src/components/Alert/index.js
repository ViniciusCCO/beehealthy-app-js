import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import statusActions from '../../actions/status-actions'
import { colors } from '../../theme/colors'
import { Container } from './styled'

const Alert = () => {
  const { message, color } = useSelector(state => state.status)
  const dispatch = useDispatch()

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: statusActions.status, payload: { message: null, color: null } })
    }, 3000)

    return () => clearTimeout(timer)
  }, [message, color])

  return message && color ? (
    <Container color={colors[color]}>
      <Text>{message}</Text>
    </Container>
  ) : (
    <View />
  )
}

export default Alert
