import React from "react";
import styled from "styled-components";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
import { getDisplay } from "./selector/Selector";
import { connect } from "react-redux";
import { useEffect, useState } from "react";


function App({ display }) {
  const [pos, setPos] = useState(1);
 
  return (
    <Container>
      <div className="header">
        <h1>Calc</h1>
        <div className="switcher_container">
          <div className="button_container">
            <div className={`button-red ${ pos===1 ? 'horizontalT1' : pos === 2 ? 'horizontalT2' : pos===3? 'horizontalT3' : '' }`}></div>
          </div>
          <div className="toggle_wrapper">
              <div className="toggle"  onClick={()=> setPos(1)} id='one'> 1</div>
              <div className="toggle" onClick={()=> setPos(2)}  id='two'> 2</div>
              <div className="toggle" onClick={()=> setPos(3)} id='three'> 3</div>
          </div>
        </div>
      </div>
      <div className="display_wrapper">
        <Display display={display} />
        <Buttons display={display} />
      </div>
    </Container>
  );
}
const Container = styled.div`
  background-color: #3b4664;
  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    h1{
      color: white;
      text-transform: uppercase;
      font-size: 1.5rem;
    }
    .switcher_container{
      position: relative;
      width: 100px;
      height: 98px;
      .button_container{
        background-color: #222D41;
         width:71px;
          height:28px;
           position:relative; 
           left:20px; 
           top:45px; 
           border-radius:14px;
           .horizontalT1{
            transform:   translateX(0px);
           }
           .horizontalT2{
            transform:   translateX(20px);
           }
           .horizontalT3{
            transform:   translateX(40px);
           }
           .button-red{
            width:16px; 
            height:16px; 
            background-color:#DB3D2B;
             border-radius:8px; 
             position:relative;
              top:6px; 
              left:6px;
              transition: all .1s ease-in-out;
           }
      }
      .toggle_wrapper{
        left:22px; 
        display:inline-block;
        position:absolute; 
        top:23px; 
        color:#ffffff;
        font-family:Arial;
         font-size:10pt;
         text-align:center;
         .toggle{
          display:inline-block;
          width:20px;
           padding-bottom:33px; 
           cursor:default; 
           user-select: none;
         }
      }
     
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
