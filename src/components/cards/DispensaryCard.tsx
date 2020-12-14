import React, { useState } from 'react'
import styled from 'styled-components'
import {numberWithCommas} from '../../utils/helpers'

interface Dispensary { 
  id: number;
  name: string; 
  averageRating: number; 
  numRatings: number; 
  image: string; 
  types: string[]; 
  tags: string[]; 
  latitude: number; 
  longitude: number; 
  location: string; 
  distance: string; 
}

interface CardProps {
  dispensary: Dispensary
}

const Card: React.FC<CardProps> = ({dispensary}) => {
  
  return (
    <CardStyles>
      <div className="card">
        <div className="image-container">
          <img src={dispensary.image} alt=""/>
        </div>
        <div className="locations">
          <span>{dispensary.location}</span>
          <span>{dispensary.distance}</span>
        </div>
        <div className="card-title">{dispensary.name}</div>
        <div className="card-info">{numberWithCommas(dispensary.numRatings)} followers</div>
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
  .card-info,
  .locations {
    font-size: 14px;
    color: #60646F;
  }
`