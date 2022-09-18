import React from 'react';
import styled from 'styled-components';
import Buttons from './components/Buttons';
import Display from './components/Display';


function App() {
  return (
    <Container>
    <div className='display_wrapper'>
      <Display />
      <Buttons />
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
justify-content: center;
align-items: center;
  .display_wrapper{
    width: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

`;
export default App;
