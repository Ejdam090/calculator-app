import React from 'react'
import styled from 'styled-components'

const Display = () => {
  return (
    <DisplayWrapper>
      <div className='display-text'>
        399,9999
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
.display-text{
  padding: 1rem;
  font-size: 4rem;
  color:white;
}
`

export default Display