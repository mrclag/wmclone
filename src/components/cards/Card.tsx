import React, { useState } from 'react'
import styled from 'styled-components'
import {numberWithCommas} from '../../utils/helpers'

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
  const [liked, setLiked] = useState(brand.liked)
  console.log(brand)
  return (
    <CardStyles>
      <div className="card">
        <div className="image-container">
          <img src={brand.image} alt=""/>
          <div className="like-button" onClick={()=>setLiked(!liked)}>
            {liked ?
              <i className="fas fa-heart" style={{color: 'red'}}/> 
                :
              <i className="far fa-heart"  style={{color: '#aaa'}}></i>
            }
          </div>
        </div>
        <div className="card-title">{brand.name}</div>
        <div className="card-info">{numberWithCommas(brand.followers)} followers</div>
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
    margin-bottom: 0.5rem;

    img {
      width: 215px;
      height: 215px;
    }

    .like-button {
      position: absolute;
      top: 8px;
      right: 8px;
      padding: 8px;
      border-radius: 50%;
      cursor: pointer;
      border: 1px solid #aaa;
      background: white;
      display: flex;
      justify-content: center;
      align-items: center;
      color: red;
      z-index: 10;
    }
  }

  .card {

  }
  .card-title {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 2px;
  }
  .card-info {
    font-size: 14px;
    color: #60646F;
  }
`