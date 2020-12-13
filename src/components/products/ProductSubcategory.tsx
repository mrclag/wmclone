import React from 'react'
import styled from 'styled-components'
import stiiizypen from '../../img/products/stiizypen.jpg'

interface Subcategory {
  name: string,
  image: string,
}

interface ProductSubcategoryProps {
  subcategory: Subcategory
}

const ProductSubcategory: React.FC<ProductSubcategoryProps> = ({subcategory}) => {
  return (
    <ProductSubcategoryStyles>
      <img src={subcategory.image} alt=""/>
      <div className='subcategory-title'>{subcategory.name}</div>
    </ProductSubcategoryStyles>
  )
}

export default ProductSubcategory

const ProductSubcategoryStyles = styled.div`
  width: 198px;
  height: 200px;
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
	align-items: center;
	border: 0.0625rem solid rgb(214, 216, 219);
	border-radius: 0.5rem;
	scroll-snap-align: start;

  img {
    margin-bottom: 1.5rem;
    height: 160px;
    width: 160px;
  }

  .subcategory-title {
    font-size: 16px;
    text-align: center;
    margin: 0px;
    padding: 0px;
    letter-spacing: 0.003125rem;
    line-height: 1.25rem;
    color: rgb(37, 41, 53);
  }
`