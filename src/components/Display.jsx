import React from "react";
import styled from "styled-components";

const Display = ({ display }) => {
  return (
    <DisplayWrapper>
      <div className="display-text">{display}</div>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  height: 5rem;
  width: 500px;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 1rem;
  background-color: ${(props) => props.theme.buttonContBg};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 530px) {
    width: 90%;
    height: 3rem;
  }
  .display-text {
    padding: 1rem;
    font-size: 4rem;
    color: ${(props) => props.theme.fontColorDisplay};
    @media (max-width: 530px) {
      font-size: 3rem;
    }
  }
`;

export default Display;
