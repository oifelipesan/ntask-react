import styled from 'styled-components'

export const Container = styled.div``

export const Main = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  position: relative;
`

export const Content = styled.form`
  transform: translate(0%);
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;
  color: #8e44ad;
  background-color: #fff;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  padding: 20px;
  border-radius: 5px;
  -webkit-box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
`

export const Text = styled.div`
  color: #8e44ad;
  font-size: 18px;

  span {
    color: #adadad;
  }

  && + && {
    margin-top: 10px;
  }
`

export const Button = styled.button`
  display: block;
  width: 100%;
  height: 50px;
  border: none;
  background: linear-gradient(120deg, #e74c3c, #c0392b, #e74c3c);
  background-size: 200%;
  cursor: pointer;
  color: #ffffff;
  transition: 0.5s;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background-position: right;
  }
`
