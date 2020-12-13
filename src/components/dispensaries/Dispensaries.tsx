import React from 'react'
import styled from 'styled-components'
import Mapbox from './Mapbox'

interface DispensariesProps {

}

const Dispensaries: React.FC<DispensariesProps> = () => {
  return (
    <DispensariesStyles>
      <div className="dispensary-controls">
        <div className="waterfall-history">Home &gt; United States &gt; California &gt; San Francisco Listings</div>
        <div className="map-title">
          <span className='map-title__category'>Marijuana Dispensaries</span>
          <span className='map-title__location'>in San Francisco, CA</span>
        </div>
        <div className="filters-bar">
          <div className="filter-button">Order online</div>
          <div className="filter-button">Open now</div>
          <div className="filter-button">Curbside Pickup</div>
          <div className="filter-button">Storefronts</div>
          <div className="filter-button">Delivery</div>
          <div className="filter-button">CBD Stores</div>
          <div className="filter-button">Doctors</div>
        </div>
      </div>
      
      <Mapbox/>
    </DispensariesStyles>
  )
}

export default Dispensaries

const DispensariesStyles = styled.div`
  padding-top: 96px;
  width: 100vw;

  .dispensary-controls {
    box-sizing: border-box;
    margin: 0px;
    padding: 1.25rem 1rem 1rem 2rem;
  }

`