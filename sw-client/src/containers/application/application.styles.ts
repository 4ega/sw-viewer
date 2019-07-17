import styled, { createGlobalStyle } from 'styled-components'
import background from './images/stars-pattern-design.png'

export const GlobalStyles = createGlobalStyle`
  html {
    font-family: sans-serif;
    height: 100%;
  }
  body, #root, .awsappsync {
    height: 100%;
    margin: 0;
    padding: 0;
  }
`
export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${background});
  background-size: 280px 280px;
`
