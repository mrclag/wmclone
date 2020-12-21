import React from 'react'
import styled from 'styled-components'

interface DealsProps {

}

const Deals: React.FC<DealsProps> = ({}) => {
  return (
    <DealsStyles>
      <div className="banner">
        <div className="banner-content">
          <div className="deals-title">
            Deals & Savings
          </div>
          <img src='https://images.weedmaps.com/static/original/savings_page_pig.png?w=670&h=405&fit=crop&crop=left,right' alt=""/>

        </div>
      </div>
      
    </DealsStyles>
  )
}

export default Deals

const DealsStyles = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding-top: 95px;

  .banner {
    height: 240px;
    background-image: url(${'https://images.weedmaps.com/static/original/savings_page_background.jpg'});
    background-size: cover;
    overflow-x: hidden;
    flex-direction: row;
    overflow: hidden;

    .banner-content {
      justify-content: space-between;
      align-items: center;
      display: flex;
      width: 75rem;
      margin: 0 auto;
      height: 240px;

      img {
        height: 300px;
        margin-right: -7.1875rem;
      }
      .deals-title {
        
        font-size: 2.5rem;
        font-weight: 700;
        letter-spacing: -0.015625rem;
        line-height: 3rem;
      }
    }
    
  }


  
  .products-wrapper {
    display: flex;
    height: 100%;
    max-width: 75rem;
    margin: auto;
    flex-direction: column;
  }
  

`