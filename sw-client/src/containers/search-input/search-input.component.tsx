import * as React from 'react'
import { Input, Button, Row } from '../../components'
import { Wrapper, Form, Title, SubTitle } from './search-input.styles'
import { useState } from 'react'

export const Root = ({ query, setQuery}: any) => {
  const [ currentValue, setCurrentValue ] = useState(query)
  return (
    <Wrapper>
      <Row style={{marginBottom: 8, alignItems: 'flex-end'}}>
        <Title>STAR WARS</Title><SubTitle>Characters</SubTitle>
      </Row>
      <Form onSubmit={(event: any) => {
        event.preventDefault()
        setQuery(currentValue)
      }}>
        <Input
          placeholder="characters name"
          onChange={(e) => setCurrentValue(e.target.value)}
          value={currentValue}
        />
        <Button>Search</Button>
      </Form>
    </Wrapper>
  )
}


