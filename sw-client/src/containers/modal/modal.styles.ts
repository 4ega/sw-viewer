import styled from 'styled-components'

export const Wrapper = styled.div<{ show: boolean }>`
  position: fixed;
  left: 50%;
  justify-content: center;
  align-items: center;
  max-height: 60vh;
  width: 800px;
  margin-left: -400px;
  transition: all 300ms;
  background: white;
  box-shadow: #1e2f39 0 0 24px;
  padding: 40px;
  ${({ show }) => show ? `
    top: 10vh;
    opacity: 1;
  ` : `
    top: 100vh;
    opacity: 0;
  `}
`
export const Close = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: indianred;
  position: absolute;
  width: 32px;
  height: 32px;
  top: 8px;
  right: 8px;
  border: 1px solid indianred;
  border-radius: 50%;
  cursor: pointer;
`
export const InnerGrid = styled.div`
  display: grid;
  grid-template-columns: 100px 100px auto;
  grid-row-gap: 16px;
  
  & > div {
    padding: 0 0 8px;
    border-bottom: 1px solid rgba(49,69,80,0.16);
  }
  
  & > div:nth-last-child(1),
  & > div:nth-last-child(2),
  & > div:nth-last-child(3) {
    border-bottom: none;
  }
`
export const ScrollBox = styled.div`
  max-height: calc(60vh - 80px);
  width: 100%;
  overflow: scroll;
`
