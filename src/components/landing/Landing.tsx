import React from 'react'
import styled from 'styled-components'
import { CardRow } from '../cards/CardRow'
import Carousel from '../Carousel'
import CovidMessage from './CovidMessage'


interface LandingProps {}

export const Landing: React.FC<LandingProps> = () => {
  return (
    <LandingStyles>
      <CovidMessage/>
      <Carousel/>
      <CardRow type="Featured brands" buttons={{viewAll: true}}/>
      <CardRow type="Dispensary services" buttons={{viewAll: true, map: true}}/>
      <CardRow type="Delivery services" buttons={{viewAll: true, leftright: true}}/>
      <CardRow type="Dispensary storefronts" buttons={{viewAll: true}}/>
      <CardRow type="Deals nearby" buttons={{viewAll: true}}/>
      <CardRow type="Doctors" buttons={{viewAll: true}}/>
    </LandingStyles>
  )
}


const LandingStyles = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding-top: 95px;

  .landing-wrapper {
    position: absolute;
    display: flex;
    flex-direction: row;
    height: 100%;
    max-width: 75rem;
    margin: 0 auto;
  }

`