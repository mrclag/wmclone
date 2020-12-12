import React, { useEffect } from 'react'
import styled from 'styled-components'
import cardimg from '../../img/cardimg.jpg'

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

  return (
    <CardStyles>
      <div className="card">
        <img src={brand.image} alt=""/>
        <div className="card-title">{brand.name}</div>
        <div className="card-info">{brand.followers} followers</div>
      </div>
    </CardStyles>
  )
}

export default Card

const CardStyles = styled.div`
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