import React from 'react'
import styled from 'styled-components'
import { dispensariesData } from '../../data/dispensaries'
import Delivery from './Delivery'
import DispensaryCard from '../cards/DispensaryCard'
import PillButton from '../buttons/PillButton'

interface DeliveryPickupProps {
  type: string
}

const DeliveryPickup: React.FC<DeliveryPickupProps> = ({type}) => {
  return (
    <DeliveryPickupStyles>
      <div className="deliveries-wrapper">
        <div className='filters'>
          {type === 'delivery' ? (
            <>
              <PillButton text="Order online"/>
              <PillButton text="Open now"/>
              <PillButton text="Medical only"/>
              <PillButton text="Recreational only"/>
            </>
          ) : (
            <>
              20 miles
              <PillButton text="Order online"/>
              <PillButton text="Open now"/>
              <PillButton text="Curbside Pickup"/>
              <PillButton text="ATM"/>
              <PillButton text="Medical Only"/>
              <PillButton text="Recreational Only"/>
            </>
          )}
        </div>

        <div className="results-title">
          Showing results for 
          <strong>
            {' '}San Francisco, CA
          </strong>
        </div>

        <div className="featured-content">
          <div className="featured-header">Featured</div>
          <div className="featured-slider">
            {dispensariesData.slice(0,5).map((dispensary)=>(
              <DispensaryCard dispensary={dispensary} />
              ))}
          </div>
        </div>

        <div className="deliveries-results-wrapper">
          <div className="sort-results">
            <span className='sort-by'>Sort by</span>
            <span className='recommended-dropdown'>
              <div className="button">
                Recommended{' '}<i className="fas fa-caret-down"></i>
              </div>
            </span>
          </div>
          <div className="deliveries-results">
            <div className="delivery">
              <div className="delivery-content">
                
                <Delivery/>
                <Delivery/>
                <Delivery/>
                <Delivery/>
                <Delivery/>
                <Delivery/>
                <Delivery/>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </DeliveryPickupStyles>
  )
}

export default DeliveryPickup

const DeliveryPickupStyles = styled.div`

`