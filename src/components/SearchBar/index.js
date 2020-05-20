import React from 'react'

import Input from './Input'
import { Card } from './styled'

const SearchBar = () => {
  return (
    <Card>
      <Input icon={'search'} side="right" />
    </Card>
  )
}

export default SearchBar
