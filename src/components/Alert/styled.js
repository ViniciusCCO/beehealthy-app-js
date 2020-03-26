import styled from 'styled-components/native'

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  height: 25px;
  position: relative;
  background-color: ${props => props.color};
`
