import React from 'react'
import styled from 'styled-components'

import Card from './BrandCard'
import DispensaryCard from './DispensaryCard'
import ViewAllButton from '../buttons/ViewAllButton'
import MapButton from '../buttons/MapButton'

import {brands} from '../../data/api'
import {dispensariesData as dispensaries} from '../../data/dispensaries'
import LeftRight from '../buttons/LeftRight'

interface CardRowProps {
  type: string,
  buttons: {
    viewAll?: boolean,
    map?: boolean,
    leftright?: boolean
  }
}

export const CardRow: React.FC<CardRowProps> = ({type, buttons}) => {


  return (
    <CardRowStyles>
      <div className="cardrow">
        <div className="cardrow__header">
          <div className="cardrow__title">
            {type}
          </div>
          <div className="cardrow__buttons">
            {buttons.map && <MapButton/>}
            {buttons.viewAll && <ViewAllButton/>}
            {buttons.leftright && <LeftRight/>}
          </div>
        </div>
        <div className="cardrow__content">
          {type === "Featured brands" && brands.map((brand)=><Card brand={brand}/>)}
          {type === "Dispensary services" && dispensaries.slice(0,5).map((dispensary)=><DispensaryCard dispensary={dispensary}/>)}
          {type === "Delivery services" && brands.map((brand)=><Card brand={brand}/>)}
          {type === "Dispensary storefronts" && brands.map((brand)=><Card brand={brand}/>)}
          {type === "Deals nearby" && brands.map((brand)=><Card brand={brand}/>)}
          {type === "Doctors" && brands.map((brand)=><Card brand={brand}/>)}
          
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
  margin-bottom: 40px;

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