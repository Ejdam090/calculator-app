import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { applyTheme } from "../actions/actionTypes";
import { firstTheme, secondTheme, thirdTheme } from "./Theme";

const Switcher = () => {
  const [pos, setPos] = useState(1);
  const dispatch = useDispatch();
  const changeTheme = (them) => {
    dispatch(applyTheme(them));
  };
  return (
    <Wrapper>
      <div className="switcher_container">
        <div className="button_container">
          <div
            className={`button-red ${
              pos === 1
                ? "horizontalT1"
                : pos === 2
                ? "horizontalT2"
                : pos === 3
                ? "horizontalT3"
                : ""
            }`}
          ></div>
        </div>
        <div className="toggle_wrapper">
          <div
            className="toggle"
            onClick={() => {
              setPos(1);
              changeTheme(firstTheme);
            }}
            id="one"
          >
            {" "}
            1
          </div>
          <div
            className="toggle"
            onClick={() => {
              setPos(2);
              changeTheme(secondTheme);
            }}
            id="two"
          >
            {" "}
            2
          </div>
          <div
            className="toggle"
            onClick={() => {
              setPos(3);
              changeTheme(thirdTheme);
            }}
            id="three"
          >
            {" "}
            3
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .switcher_container {
    position: relative;
    width: 100px;
    height: 98px;
    .button_container {
      background-color: #222d41;
      width: 71px;
      height: 28px;
      position: relative;
      left: 20px;
      top: 45px;
      border-radius: 14px;
      .horizontalT1 {
        transform: translateX(0px);
      }
      .horizontalT2 {
        transform: translateX(20px);
      }
      .horizontalT3 {
        transform: translateX(40px);
      }
      .button-red {
        width: 16px;
        height: 16px;
        background-color: ${(props) => props.theme.buttonToggleColor};
        border-radius: 8px;
        position: relative;
        top: 6px;
        left: 6px;
        transition: all 0.1s ease-in-out;
      }
    }
    .toggle_wrapper {
      left: 22px;
      display: inline-block;
      position: absolute;
      top: 23px;
      color: ${(props) => props.theme.fontColorDisplay};
      font-family: Arial;
      font-size: 10pt;
      text-align: center;
      .toggle {
        display: inline-block;
        width: 20px;
        padding-bottom: 33px;
        cursor: default;
        user-select: none;
      }
    }
  }
`;
export default Switcher;
