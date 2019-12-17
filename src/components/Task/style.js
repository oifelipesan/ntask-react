import styled from 'styled-components'

export const TaskItem = styled.div`
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;
  color: #8e44ad;
  background-color: #fff;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  padding: 15px;
  border-radius: 5px;
  -webkit-box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  align-items: center;

  && + && {
    margin-top: 5px;
  }

  svg {
    font-size: 1.5rem;
  }
`

export const Check = styled.span`
  margin-right: 15px;

  svg {
    font-size: 1.5rem;
  }
`

export const Trash = styled.span`
  color: #e74c3c;
  margin-left: auto;
  cursor: pointer;

  svg {
    font-size: 1.3rem;
    transition: 0.3;
  }
`
