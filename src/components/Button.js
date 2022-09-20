import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux';
import { updateDisplay,  subtraction, multiplication, division, equal } from '../actions/actionTypes';
import { clearDIsplay, addition } from './../actions/actionTypes';

const Button = ({updateDisplay,add, subtract, multiply, divide,clear, display, button, id, value, className}) => {
    const handleClick = e =>{
        if(id === 'clear'){
            clear();
        }else if(id=== 'subtract'){
            subtract(display);
        }else if( id ===' multiply'){
            multiply(display);
        }else if(id ==='divide'){
            divide(display);
        }else if(id ==='add'){
            add(button);
        }else if(id ==='equals'){
            equal(display);
        }
        else{
            updateDisplay(button);
        }
    }
  return (
    <ButtonWrapper id={id} value={value} onClick={handleClick} className={className}>{button}</ButtonWrapper>
  )
}


const mapDispatchToProps = dispatch =>({
    updateDisplay: display => dispatch(updateDisplay(display)),
    subtract: display  => dispatch(subtraction(display)),
    multiply: display => dispatch(multiplication(display)),
    divide: display => dispatch(division(display)),
    clear: display => dispatch(clearDIsplay(dispatch)),
    add: display => dispatch(addition(display)),
    equal: display => dispatch(equal(display))
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
    background-color: #eae3db;
    border-bottom: 3px solid #afa59b;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
      background-color: #afa59b;
      border-bottom: 3px solid #eae3db;
    }
    
`
export default connect (
    null,
    mapDispatchToProps
)(Button);