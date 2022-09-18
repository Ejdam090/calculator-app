import React from "react";
import styled from "styled-components";

const Buttons = () => {
  return (
    <ButtonContainer>
      <div className="row-1">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="bg-blue">Del</button>
      </div>
      <div className="row-2">
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
      </div>
      <div className="row-3">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>
      </div>
      <div className="row-4">
        <button>.</button>
        <button>0</button>
        <button>/</button>
        <button>x</button>
      </div>
      <div className="row-5">
        <button className="bg-blue">Reset</button>
        <button className="bg-red">=</button>
      </div>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  background-color: #252d44;
  width: 500px;
  border-radius: 1rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    text-transform: uppercase;
    text-align: center;
    font-size: 2rem;
    outline: none;
    border: none;
    padding: 1rem;
    margin: 0.5rem;
    border-radius: 0.5rem;
    background-color: #eae3db;
    border-bottom: 3px solid #afa59b;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
      background-color: #afa59b;
      border-bottom: 3px solid #eae3db;
    }
  }
  .bg-blue {
    background-color: #a2b3e1;
    border-bottom: 3px solid #414e6e;
    &:hover {
      background-color: #414e6e;
      border-bottom: 3px solid #a2b3e1;
    }
  }
  .bg-red {
    background-color: #f96c5b;
    border-bottom: 3px solid #982415;
    &:hover {
      background-color: #982415;
      border-bottom: 3px solid #f96c5b;
    }
  }
  .row-1,
  .row-2,
  .row-3,
  .row-4 {
    button {
      width: 6rem;
    }
  }
  .row-5 {
    button {
      width: 13rem;
    }
  }
`;
export default Buttons;
