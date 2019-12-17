import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

const fade = keyframes`${fadeIn}`

export const Container = styled.div`
  position: relative;
  color: #fff;
`

export const Icon = styled.div`
  cursor: pointer;

  svg {
    color: #fff;
    font-size: 1.5rem;
  }
`

export const Menu = styled.div`
  font-family: Roboto, sans-serif;
  position: absolute;
  margin-top: 10px;
  margin-right: -15px;
  right: 0;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  width: 200px;
  z-index: 999999999999;
  -webkit-box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);

  display: ${props => (props.state ? 'block' : 'none')};
  animation: ${fade} 0.2s linear;
`

export const MenuItem = styled.div`
  color: #adadad;
  font-size: 18px;
  padding: 10px;

  a {
    color: #adadad;
    text-decoration: none;
  }

  span {
    cursor: pointer;
  }

  svg {
    font-size: 18px;
    margin-right: 5px;
  }

  && + && {
    border-top: solid #adadad 1px;
  }
`
