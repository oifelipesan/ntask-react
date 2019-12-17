import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    width: 100%;
    height: 50px;
    border: none;
    background: linear-gradient(120deg, #3498db, #8e44ad, #3498db);
    background-size: 200%;
    cursor: pointer;
    color: #ffffff;
    transition: 0.5s;
    border-radius: 5px;
    text-decoration: none;

    &:hover {
      background-position: right;
    }
  }
`
export const NoTasks = styled.div`
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
  flex-direction: column;
  align-items: center;
`

export const TextNoTask = styled.div`
  padding: 20px 0;
`
