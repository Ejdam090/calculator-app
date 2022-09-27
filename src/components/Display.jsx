import React from 'react'
import styled from 'styled-components'

const Display = ({display}) => {
  return (
    <DisplayWrapper>
      <div className='display-text'>
        {display}
      </div>
    </DisplayWrapper>
  )
}

const DisplayWrapper = styled.div`
height: 5rem;
width: 500px;
border-radius: .5rem;
padding: .5rem;
margin: 1rem;
background-color: #252d44;
display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 530px) {
    width: 90%;
    height: 3rem;
  }
.display-text{
  padding: 1rem;
  font-size: 4rem;
  color:white;
  @media (max-width: 530px){
    font-size: 3rem;
  }
}
`

export default Display