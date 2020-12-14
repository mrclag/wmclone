import React from 'react'
import styled from 'styled-components'
import { CardRow } from '../cards/CardRow'
import Carousel from '../Carousel'
import { CovidMessage } from './CovidMessage'


interface LandingProps {}

export const Landing: React.FC<LandingProps> = () => {
  return (
    <LandingStyles>
      <CovidMessage/>
      <Carousel/>
      <CardRow/>
      <CardRow/>
      <CardRow/>
      <CardRow/>
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