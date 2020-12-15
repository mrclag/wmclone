import React, { useState } from 'react'
import styled from 'styled-components'
import { dispensariesData } from '../../data/dispensaries'
import PillButton from '../buttons/PillButton'
import DispensaryCard from '../cards/DispensaryCard'
import Delivery from './Delivery'

interface DeliveriesProps {

}

interface DeliveryStyleProps {
  openTab: string
}

const Deliveries: React.FC<DeliveriesProps> = () => {
  const [openTab, setOpenTab] = useState("delivery")

  return (
    <DeliveriesStyles openTab={openTab}>
      <div className="type-nav">
        <div className="type-wrapper">
          <div className="type-button delivery-button" onClick={()=>setOpenTab("delivery")}>
            Delivery
          </div>
          <div className="type-button pickup-button" onClick={()=>setOpenTab("pickup")}>
            Pickup
          </div>
        </div>
      </div>


    
      <div className="deliveries-wrapper">

        <div className='filters'>
          <PillButton text="Order online"/>
          <PillButton text="Open now"/>
          <PillButton text="Medical only"/>
          <PillButton text="Recreational only"/>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </DeliveriesStyles>
  )
} 

export default Deliveries

const DeliveriesStyles = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding-top: 95px;

  .type-nav {
    width: 100%;
    border-bottom: 1px solid rgb(230, 230, 230);

    .type-wrapper {
      max-width: 75rem;
      margin: auto;
      display: flex;
      flex-direction: row;
    }

    .type-button {
      font-size: 20px;
      cursor: pointer;
      margin: 0px;
      line-height: 3rem;
      color: #4a4a4a;
      padding: 0px 3rem;
      margin-left: 0.25rem !important;

      &.delivery-button {
        border-bottom: ${(props: DeliveryStyleProps) => props.openTab === "delivery" ? '3px solid #01a8a3' : '0.25rem solid transparent'};
      }
      &.pickup-button {
        border-bottom: ${(props: DeliveryStyleProps) => props.openTab === "pickup" ? '3px solid #01a8a3' : '0.25rem solid transparent'};
      }
    }
  }


  .filters {
    display: flex;
    padding: 1.5rem 0px .25rem;
  }

  .results-title {
    box-sizing: border-box;
    font-weight: 400;
    margin: 0px;
    text-rendering: optimizelegibility;
    font-family: circular, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
    padding: 0px;
    padding-top: 24px;
    font-size: 20px;
    line-height: 1.5rem;
  }

  .featured-content {
    padding: 1.5rem;

    .featured-header {
      font-weight: 700;
      font-size: 20px;
      line-height: 1.5rem;
      display: block;
    }

    .featured-slider {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .deliveries-results-wrapper {
    display: flex;
    flex-direction: column;
    .sort-results {
      display: flex;
      flex-direction: row;
      align-items: center;
      
      .sort-by {

      }

      .recommended-dropdown {
        margin-left: 5px;
        .button {
          color: rgb(1, 168, 163);
          font-weight: bold;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 1rem;
          height: 2.5rem;
          font-size: 16px;
          .fas {
            margin-left: 5px;
            font-size: 14px;
          }
        }
    }
    }
  }
  
  .deliveries-wrapper {
    display: flex;
    height: 100%;
    max-width: 75rem;
    margin: auto;
    flex-direction: column;
  }

  
`