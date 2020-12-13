import React, { useState } from 'react'
import styled from 'styled-components'


interface CovidMessageProps {
}
interface CovidMessageStyleProps {
  display: boolean;
}

export const CovidMessage: React.FC<CovidMessageProps> = () => {
  const [display, setDisplay] = useState(true)

  return (
    <CovidMessageStyles display={display}>
      <div className="message-wrapper">
       <div className="message">
        <strong>COVID-19</strong>:{' '}
        <span>
          stay safe by ordering online for delivery or curbside pickup, where available.
        </span>
       </div>
       <div className="message-exit" onClick={()=> setDisplay(false)}>
         <i className="fas fa-times"/>
       </div>
      </div>
    </CovidMessageStyles>
  )
}

const CovidMessageStyles = styled.div`
  height: 50px;
  background: #FA943E;
  width: 100%;
  margin: 0 auto;
  display: ${(props: CovidMessageStyleProps) => props.display ? 'true' : 'none'};

  .message-wrapper {
    display: flex;
    flex-direction: row;
    height: 100%;
    max-width: 75rem;
    margin: 0px auto;
    color: white;
    line-height: 50px;
    justify-content: space-between;
  }

  .message {
    font-size: 0.875rem;
    span {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .message-exit {
    cursor: pointer;
    font-size: 16px;
  }
`