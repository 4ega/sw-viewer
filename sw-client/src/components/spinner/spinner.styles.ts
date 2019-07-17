import styled, { keyframes } from 'styled-components'

export const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const spinnerDash = keyframes`
  0% {
    stroke-dasharray: 1,200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89,200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89,200;
    stroke-dashoffset: -124px;
  }
`
export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto 10px auto;
  width: 100%;
  max-height: 100%;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`
export const Svg = styled.svg`
  animation: ${rotate360} 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 64px;
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;
  margin: auto;
`
export const Circle = styled.circle`
  animation: ${spinnerDash} 1.5s ease-in-out infinite;
  stroke-dasharray: 1,200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  stroke: white;
`
