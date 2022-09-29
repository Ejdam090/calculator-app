import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  updateDisplay,
  subtraction,
  multiplication,
  division,
  equal,
  backspace,
} from "../actions/actionTypes";
import { clearDIsplay, addition } from "./../actions/actionTypes";

const Button = ({
  updateDisplay,
  add,
  subtract,
  multiply,
  divide,
  clear,
  equal,
  display,
  button,
  id,
  value,
  className,
  backspace,
}) => {
  const handleClick = (e) => {
    if (id === "clear") {
      clear();
    } else if (id === "subtract") {
      subtract(display);
    } else if (id === "multiply") {
      multiply(display);
    } else if (id === "divide") {
      divide(display);
    } else if (id === "add") {
      add(display);
    } else if (id === "equals") {
      equal(display);
    } else if (id === "del") {
      backspace(button);
    } else {
      updateDisplay(button);
    }
  };
  return (
    <ButtonWrapper
      id={id}
      value={value}
      onClick={handleClick}
      className={className}
    >
      {button}
    </ButtonWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateDisplay: (display) => dispatch(updateDisplay(display)),
  subtract: (display) => dispatch(subtraction(display)),
  multiply: (display) => dispatch(multiplication(display)),
  divide: (display) => dispatch(division(display)),
  clear: (display) => dispatch(clearDIsplay(display)),
  add: (display) => dispatch(addition(display)),
  equal: (display) => dispatch(equal(display)),
  backspace: (display) => dispatch(backspace(display)),
});

const ButtonWrapper = styled.button`
  text-transform: uppercase;
  text-align: center;
  font-size: 2rem;
  outline: none;
  border: none;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.BgBtn};
  border-bottom: 3px solid ${(props) => props.theme.BorBtn};
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  color: ${(props) => props.theme.fontColorBtn};
  &:hover {
    background-color: ${(props) => props.theme.BorBtn};
    border-bottom: 3px solid ${(props) => props.theme.BgBtn};
  }
  @media (max-width: 530px) {
    font-size: 1.2rem;
    padding: 0.5rem;
  }
  @media (max-width: 359px) {
    font-size: 1rem;
  }
`;
export default connect(null, mapDispatchToProps)(Button);
