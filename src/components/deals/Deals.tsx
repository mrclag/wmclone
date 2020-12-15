import React from 'react'
import styled from 'styled-components'

interface DealsProps {

}

const Deals: React.FC<DealsProps> = ({}) => {
  return (
    <DealsStyles>
      
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
    width: 100vw;
    height: auto;

  }

  .products-wrapper {
    display: flex;
    height: 100%;
    max-width: 75rem;
    margin: auto;
    flex-direction: column;
  }

`