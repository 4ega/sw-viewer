import * as React from 'react'
import { Circle, Svg, Wrapper } from './spinner.styles'

export const Spinner = () => (
  <Wrapper>
    <Svg viewBox="25 25 50 50">
      <Circle cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
    </Svg>
  </Wrapper>
)
