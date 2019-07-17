import styled from 'styled-components'

export const Button = styled.button`
  width: 100px;
  height: 48px;
  border: none;
  color: #3e3e3e;
  text-transform: uppercase;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  background-color: #ffd54e;
  cursor: pointer;
  outline: 0;
  transition: all 300ms;
  
  &:hover,
  &:focus {
    font-size: 18px;
    text-decoration: underline;
  }
`
