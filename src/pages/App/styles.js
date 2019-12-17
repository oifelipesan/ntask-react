import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ecf0f1;
  min-height: 100vh;
  height: 100%;
  overflow-x: hidden;
`

export const ButtonAdd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 15px;
  right: 15px;
  padding: 15px;
  width: 26px;
  height: 26px;
  font-size: 1.6rem;
  color: #8e44ad;
  background-color: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);

  &:active {
    opacity: 0.5;
  }
`
