import React from 'react'
import styled from 'styled-components'
import placeholder from '../../img/dispensaries/deal1_goodtree.jpeg'

interface DeliveryProps {

}

const Delivery: React.FC<DeliveryProps> = ({}) => {
  return (
    <DeliveryStyles>
      <div className="delivery-content">
        <div className="delivery-left">
          <div className="image-box">
            <img src={placeholder} alt=""/>
          </div>
          <div className="basic-info">
            <div className="company-name">SmileHouse</div>
            <div className="type">Medical + Recreational</div>
            <div className="requirements">
              <span>Free Delivery</span>
              <span>{' '}•{' '}</span>
              <span>$35 minimum</span>
            </div>
            <div className="rating"><i className="fas fa-star"/>{' '}4.5 (201)</div>
            <div className="tags">
              <div className="tag">
                Order online
              </div>
            </div>
          </div>
        </div>
        <div className="menu-details">

          {/* Details */}
          <div className="menu-breakdown">
            <div className="breakdown-title">
              <span>
                Menu Breakdown
              </span>
              <span>
                {' '}(443 items)
              </span>
            </div>
            <div className="breakdown">
              <div className="breakdown-item">
                <i className="fas fa-spa"></i>
                <div className="category">Concentrates</div>
                <div className="num-items">(28 items)</div>
              </div>
              <div className="breakdown-item">
                <i className="fas fa-cookie"></i>
                <div className="category">Edibles</div>
                <div className="num-items">(28 items)</div>
              </div>
              <div className="breakdown-item">
                <i className="fas fa-tree"></i>
                <div className="category">Flower</div>
                <div className="num-items">(28 items)</div>
              </div>
              <div className="breakdown-item">
                <i className="fas fa-pen-fancy"></i>
                <div className="category">Vape Pens</div>
                <div className="num-items">(28 items)</div>
              </div>
              <div className="breakdown-item">
                <i className="fas fa-leaf"></i>
                <div className="category">Other</div>
                <div className="num-items">(28 items)</div>
              </div>
            </div>
          </div>

          <div className="menu-genetics">
            <div className="genetics-title">Menu Genetics</div>
            <div className="genetics-type">
              <span className='gen-title'>
                Hybrid
              </span>
              <span className='gen-num'>
                {' '}(562 items)
              </span>
            </div>
            <div className="genetics-type">
              <span className='gen-title'>
                Indica
              </span>
              <span className='gen-num'>
              {' '}(155 items)
              </span>
            </div>
            <div className="genetics-type">
              <span className='gen-title'>
                Hybrid
              </span>
              <span className='gen-num'>
              {' '}(99 items)
              </span>
            </div>
          </div>

        </div>
      </div>
    </DeliveryStyles>
  )
}

export default Delivery

const DeliveryStyles = styled.div`
	margin: 0px;
	padding: 1.5rem 0px;
	flex-direction: row;
	display: flex;
	border-top: 0.125rem solid rgb(242, 243, 244);
  cursor: pointer;

  .delivery-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
  
  .delivery-left {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 100%;
    min-height: 6.25rem;
    min-width: 18.75rem;
    max-width: 15.625rem;

    .image-box {
      img {
        box-sizing: border-box;
        margin: 0px 1.5rem 0.5rem 0px;
        padding: 0px;
        background: rgb(255, 255, 255);
        overflow: hidden;
        position: relative;
        width: 4rem;
        height: 4rem;
      }
    }

    .basic-info {
      line-height: 1.25rem;

      .company-name {
        font-size: 16px;
        color: #252935;
        font-weight: bold;
      }
      .type,
      .requirements {
        color: #60646F;
        font-size: 14px
      }
    }
    .rating {
      font-weight: 400;
      font-size: 14px;
      line-height: 1.25rem;
      color: rgb(96, 100, 111);
      display: inline-block;
      max-width: 100%;
      text-overflow: ellipsis;
      i {
        color: #f5ab24;
      }
    }
    
    .tags {
      display: flex;

      .tag {
        box-sizing: border-box;
        background: rgb(230, 229, 229);
        border-radius: 0.1875rem;
        color: rgb(37, 41, 53);
        font-weight: 700;
        font-size: 12px;
        letter-spacing: 0.00625rem;
        margin: 0px 0.25rem 0.25rem 0px;
        padding: 0px 0.25rem;
        white-space: nowrap;
    }
  }
  }

  .menu-details {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 5rem 0px 5rem;
    background-color: rgb(255, 255, 255);
    width: 100%;
  }
  .breakdown-title {
    font-weight: 400;
    color: #60646F;
      font-size: 14px;
    
    span:first-of-type {
      color: #252935;
      font-size: 16px;
      font-weight: 700;
    }
  }

  .breakdown {
    display: flex;
    flex-direction: row;

  }
  .breakdown-item {
    color: #252935;
    display: flex;
    flex-direction: column;
    margin: 5px;
    text-align: center;
    line-height: 1.25rem;

    i {
      padding: 8px;
      font-size: 24px;
      color: #60646F;
    }


    .num-items {
      font-size: 14px;
      color: #60646F;
    }
  }

  .menu-genetics{
    line-height: 1.25rem;

    .genetics-title {
      font-weight: bold;
      color: #252935;
      font-size: 16px;
    }
    .genetics-type {
      font-weight: 400;
      color: #60646F;
      font-size: 14px;
      
      .gen-title {
        color: #252935;
        font-size: 16px;
      }
    }
  }
`