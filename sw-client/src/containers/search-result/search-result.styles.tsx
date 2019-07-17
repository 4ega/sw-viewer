import styled from 'styled-components'

export const Wrapper = styled.div<{ show: boolean }>`
  position: relative;
  ${({ show }) => {
    if (show) {
      return `
        flex: 2;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 260px;
        grid-gap: 16px;
        padding-bottom: 24px;
      `
    }
    return `flex: 0;`
  }};
  transition: all 300ms;
  width: 960px;
  margin: 0 auto;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  cursor: pointer;
  transition: all 300ms;
  text-align: center;
  
  &:hover {
    transform: scale(1.05);
  }
`
export const Name = styled.div`
  font-size: 24px;
`
export const Detail = styled.div`
  font-size: 18px;
`
export const Image = styled.img`
  width: 100%;
  height: 160px;
  background-color: #272922;
`
export const Inner = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
