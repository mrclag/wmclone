import React from 'react'
import styled from 'styled-components'

interface CovidMessageProps {

}

export const CovidMessage: React.FC<CovidMessageProps> = ({}) => {
  return (
    <CovidMessageStyles>
      <div className="message-wrapper">
       <div className="message">
        <strong>COVID-19</strong>:{' '}
        <span>
          stay safe by ordering online for delivery or curbside pickup, where available.
        </span>
       </div>
       <div className="message-exit">
         <div className="fas fa-times"></div>
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
    }
  }

  .message-exit {
    font-size: 16px;
  }
`