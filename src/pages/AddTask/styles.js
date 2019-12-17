import styled from "styled-components";

export const Container = styled.div`
  background-color: #ecf0f1;
  min-height: 100vh;
  height: 100%;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  position: relative;
`;

export const Form = styled.form`
  transform: translate(0%);
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;
  color: #8e44ad;
  background-color: #fff;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  padding: 20px;
  border-radius: 5px;
  -webkit-box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
`;
