import styled from 'styled-components'

export const Input = styled.input`
  width: 450px;
  height: 48px;
  padding: 0 0 0 8px;
  border: none;
  font-size: 16px;
  outline: 0;
  transition: all 300ms;
  
  &:focus {
    box-shadow: inset 0 0 3px #3e3e3e90;
  }
`
