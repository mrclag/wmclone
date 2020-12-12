import React from 'react'
import styled from 'styled-components'

interface Brand {
  name: string,
  followers: number,
  liked: boolean,
  image: string
}

interface CardProps {
  brand: Brand
}

const Card: React.FC<CardProps> = ({brand}) => {
  console.log(brand)
  return (
    <CardStyles>
      <div className="card">
        <div className="image-container">
          <img src={brand.image} alt=""/>
          <div className="like-button">
            <i className="fas fa-heart">LOVE</i>
          </div>
        </div>
        <div className="card-title">{brand.name}</div>
        <div className="card-info">{brand.followers} followers</div>
      </div>
    </CardStyles>
  )
}

export default Card

const CardStyles = styled.div`

  width: 215px;

  .image-container {
    position: relative;
    width: 215px;
    height: 215px;

    img {
      width: 215px;
      height: 215px;
    }

    .like-button {
      position: absolute;
      top: 0px;
      right: 0px;
      border: 1px solid #333;
      background: white;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #333;
      z-index: 10;
    }
  }

  .card {

  }
  .card-title {
    font-weight: bold;
    font-size: 16px;
  }
  .card-info {
    font-size: 14px;
  }
`