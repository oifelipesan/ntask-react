import styled from "styled-components";

export const Container = styled.div`
  border-bottom: solid 2px #adadad;
  position: relative;
  margin: 30px 0;
  display: flex;
  flex-direction: column;

  input {
    box-sizing: border-box;
    font-size: 15px;
    color: #333;
    border: none;
    width: 100%;
    outline: none;
    background: none;
    padding: 0 5px;
    height: 40px;
  }
`;

export const Span = styled.span`
  &::before {
    content: attr(data-placeholder);
    position: absolute;
    top: ${props => (props.hasFocus ? "-5px" : "50%")};
    left: 5px;
    color: #adadad;
    transform: translateY(-50%);
    z-index: -1;
    transition: 0.5s;
  }

  &::after {
    content: "";
    position: absolute;
    width: ${props => (props.hasFocus ? "100%" : "0%")};
    height: 2px;
    background: linear-gradient(120deg, #3498db, #8e44ad);
    transition: 0.5s;
  }
`;
