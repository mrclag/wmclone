import React from 'react'
import styled from 'styled-components'

import ViewAllButton from '../layout/ViewAllButton'
import Card from './Card'

import {brands} from '../../data/api'

interface CardRowProps {

}

export const CardRow: React.FC<CardRowProps> = () => {
  return (
    <CardRowStyles>
      <div className="cardrow">
        <div className="cardrow__header">
          <div className="cardrow__title">
            Featured Brands
          </div>
          <div className="cardrow__buttons">
            <ViewAllButton/>
          </div>
        </div>
        <div className="cardrow__content">
          {brands.map((brand)=> 
            <Card brand={brand}/>
          )}
        </div>
      </div>
      
    </CardRowStyles>
  )
}

const CardRowStyles = styled.div`
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
  /* border: 1px solid black; */
  height: 340px;
  padding-top: 20px;

  .cardrow {
    display: flex;
    flex-direction: column;
  }

  .cardrow__header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    margin-bottom: 16px;

    .cardrow__title {
      color: #333;
      font-size: 20px;
      font-weight: bold;
    }

    .cardrow__buttons {
      
    }
  }

  .cardrow__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`