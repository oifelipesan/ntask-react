import styled from 'styled-components'

export const HeaderApp = styled.header`
  width: calc(100% - 40px);
  height: 60px;
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(120deg, #3498db, #8e44ad);
  padding: 0 20px;

  a:active {
    opacity: 0.5;
  }

  svg {
    text-decoration: none;
  }

  h1 {
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
`

export const Back = styled.div`
  svg {
    opacity: ${props => (props.back ? '0' : '1')};
    color: #fff;
    font-size: 1.5rem;
  }
`
