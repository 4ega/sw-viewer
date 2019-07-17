import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  transition: all 300ms;
`
export const Form = styled.form`
  display: flex;
  margin-bottom: 70px;
  border: 3px solid #ffd54e;
`
export const Title = styled.div`
  margin-right: 8px;
  font-family: "Arial Black", sans-serif;
  font-size: 48px;
  color: transparent;
  -webkit-text-stroke: 2px #ffd54e;
`
export const SubTitle = styled.div`
  font-family: cursive;
  font-size: 36px;
  color: white;
  transform: skewX(-12deg)
`
