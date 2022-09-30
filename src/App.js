import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
import { getDisplay } from "./selector/Selector";
import { connect, useSelector } from "react-redux";
import Switcher from "./components/Switcher";

function App({ display }) {
  const them = useSelector((state) => state.theme);
  return (
    <ThemeProvider theme={them}>
      <Container>
        <div className="header">
          <h1>Calc</h1>
          <Switcher />
        </div>
        <div className="display_wrapper">
          <Display display={display} />
          <Buttons display={display} />
        </div>
      </Container>
    </ThemeProvider>
  );
}
const Container = styled.div`
  background-color: ${(props) => props.theme.bodyBg};
  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    h1 {
      color: white;
      text-transform: uppercase;
      font-size: 1.5rem;
    }
  }
  .display_wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const mapStateToProps = (state) => {
  const displayValue = getDisplay(state);
  return {
    display: displayValue,
  };
};

export default connect(mapStateToProps, null)(App);
