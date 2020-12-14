import React from 'react'
import styled from 'styled-components'
import Mapbox from './Mapbox'
import PillButton from '../buttons/PillButton'

interface DispensariesProps {}

const Dispensaries: React.FC<DispensariesProps> = () => {

  return (
    <DispensariesStyles>
      <div className="dispensary-controls">
        <div className="waterfall">
          <span className='waterfall__link'>Home</span>
          <span className='waterfall__arrow'><i className='fas fa-chevron-right'/></span>
          <span className='waterfall__link'>United States </span> 
          <span className='waterfall__arrow'><i className='fas fa-chevron-right'/></span>
          <span className='waterfall__link'>California</span>
          <span className='waterfall__arrow'><i className='fas fa-chevron-right'/></span>
          <span className='waterfall__link'>San Francisco Listings</span>
        </div>
        <div className="map-title">
          <span className='map-title__category'>Marijuana Dispensaries</span>
          <span className='map-title__location'>in San Francisco, CA</span>
        </div>
        <div className="filters-bar">
          <PillButton text="Order online"/>
          <PillButton text="Open now"/>
          <PillButton text="Curbside Pickup"/>
          <PillButton text="Storefronts"/>
          <PillButton text="Delivery"/>
          <PillButton text="CBD Stores"/>
          <PillButton text="Doctors"/> 
          <hr/>
          <div className="filter-dropdown">
            <i className="fas fa-sort-amount-down-alt"></i>
            <span className="filter-dropdown__title">Filters</span>
          </div>
        </div>
      </div>
      
      <Mapbox/>
      
    </DispensariesStyles>
  )
}

export default Dispensaries

const DispensariesStyles = styled.div`
  padding-top: 96px;
  width: 100%;
  overflow-x: hidden;
  position: relative;
  
  .dispensary-controls {
    box-sizing: border-box;
    margin: 0px;
    padding: 1.25rem 1rem 1rem 2rem;
  }

  .waterfall {
    font-size: 12px;
    text-transform: uppercase;

    &__link {
      color: rgb(0, 168, 163);
    }
    &__arrow {
      color: #ccc;
      padding: 10px;
      font-size: 12px;
    }
  }
  
  .map-title {
    display: flex;
    flex-direction: row;
    padding: 0.5rem 0px 0px;
    font-size: 24px;
    color: #4a4a4a;

    &__category {
      font-weight: bold;
    }

    &__location {
      margin-left: 5px;
    }
  }

  .filters-bar {
    margin: 0px -1rem;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: row;
    overflow: auto hidden;
    hr {
      margin: 0px 5px;
      border: 1px solid #eee;
    }
    .filter-dropdown {
      display: flex;
      border-radius: 0.1875rem;
      border: 0.0625rem solid rgb(204, 204, 204);
      cursor: pointer;
      align-items: center;
      padding: 5px 10px;
      font-weight: bold;
      font-size: 12px;
      color: #4a4a4a;

      &__title {
        place-content: center;
        font-weight: bold;
        margin-right: 0.5rem;
        display: block;
        color: rgb(74, 74, 74);
        margin: 0px;
        margin-left: 5px;
      }
    }
  }

`