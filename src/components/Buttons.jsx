import React from "react";
import styled from "styled-components";
import Button from './Button';

const Buttons = ({display}) => {

  return (
    <ButtonContainer>
      <div className="row-1">
      <Button button={'7'} id={'seven'} value={'7'} type={'num'}/>
      <Button button={'8'} id={'eight'} value={'8'} type={'num'}/>
      <Button button={'9'} id={'nine'} value={'9'} type={'num'}/>
      <Button button={'Del'} id={'del'} display={'display'} type={'operation'} className='bg-blue'/>
        
      </div>
      <div className="row-2">
      <Button button={'4'} id={'for'} value={'4'} type={'num'}/>
      <Button button={'5'} id={'five'} value={'5'} type={'num'}/>
      <Button button={'6'} id={'six'} value={'6'} type={'num'}/>
      <Button button={'+'} id={'add'}  display={display} type={'operator'}/>
      </div>
      <div className="row-3">
      <Button button={'1'} id={'one'} value={'2'} type={'num'}/>
      <Button button={'2'} id={'two'} value={'2'} type={'num'}/>
      <Button button={'3'} id={'three'} value={'3'} type={'num'}/>
      <Button button={'-'} id={'subtract'}  display={display} type={'operator'}/>
      </div>
      <div className="row-4">
      <Button button={'.'} id={'decimal'} value={'.'} type={'decimal'} display={display}/>
      <Button button={'0'} id={'zero'} value={'0'} type={'num'}/>
      <Button button={'/'} id={'divide'}  type={'operator'} display={display}/>
      <Button button={'x'} id={'multiply'} type={'operator'} display={display}/>
      </div>
      <div className="row-5">
      <Button button={'Reset'} id={'clear'}  type={'clear'} className='bg-blue'/>
      <Button button={'='} id={'equals'} display={display}  type={'equals'} className='bg-red'/>
      </div>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  background-color: ${(props)=> props.theme.buttonContBg};
  color: ${props => props.theme.fontColorBtn};
  width: 500px;
  border-radius: 1rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 530px) {
    width: 90%;
  }
  .bg-blue {
    background-color: ${(props) => props.theme.BgBtnFS};
    border-bottom: 3px solid  ${(props) => props.theme.BorBtnFS};
    &:hover {
      background-color: ${(props) => props.theme.BgBtnFSHover};
      border-bottom: 3px solid ${(props) => props.theme.BorBtnFSHover};
    }
  }
  .bg-red {
    background-color: ${(props) => props.theme.BgBtnEqual};
    border-bottom: 3px solid ${(props) => props.theme.BorBtnEqual};
    &:hover {
      background-color: ${(props) => props.theme.BgBtnEqualHover};
      border-bottom: 3px solid ${(props) => props.theme.BorBtnEqualHover};
    }
  }
  .row-1,
  .row-2,
  .row-3,
  .row-4 {
    button {
      width: 6rem;
      @media (max-width: 530px){
        width: 5rem;
      }
      @media (max-width: 425px){
        width: 4rem;
      }
      @media (max-width: 359px){
        width: 3rem;
      }
    }
  }
  .row-5 {
    button {
      width: 13rem;
      @media (max-width: 530px){
        width: 11rem;
      }
      @media (max-width: 425px){
        width: 9rem;
      }
      @media (max-width: 359px){
        width: 7rem;
      }
    }
  }
`;
export default Buttons;
