import styled from 'styled-components'

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(120deg, #3498db, #8e44ad);

  a {
    text-decoration: none;
    color: #3498db;
  }

  a:hover {
    text-decoration: underline;
  }
`

export const Form = styled.form`
  width: 360px;
  padding: 50px 40px;
  border-radius: 10px;
  transform: translate(0%);
  background-color: #f1f1f1;
  margin: 10px;
  box-sizing: border-box;

  h1 {
    text-align: center;
    margin-bottom: 60px;
  }
`

export const Button = styled.button`
  display: block;
  width: 100%;
  height: 50px;
  border: none;
  background: linear-gradient(120deg, #3498db, #8e44ad, #3498db);
  background-size: 200%;
  cursor: pointer;
  color: #ffffff;
  transition: 0.5s;
  border-radius: 5px;

  &:hover {
    background-position: right;
  }
`

export const Text = styled.div`
  text-align: left;
  margin-top: 50px;
  font-size: 14px;
  display: block;
`

export const MessageError = styled.p`
  color: #ff3333;
  margin: 0;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
`
