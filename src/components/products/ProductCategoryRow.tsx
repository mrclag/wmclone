import React from 'react'
import styled from 'styled-components'

import ViewAllButton from '../layout/ViewAllButton'

import {brands} from '../../api'
import ProductSubcategory from './ProductSubcategory'

interface Subcategory {
  name: string,
  image: string,
}

interface ProductCategory {
  name: string,
  image: File | string,
  subcategories: any;
}

interface ProductCategoryRowProps {
  category: ProductCategory
}

const ProductCategoryRow: React.FC<ProductCategoryRowProps> = ({category}) => {
  return (
    <ProductCategoryRowStyles>
      <div className="cardrow">
        <div className="cardrow__header">
          <div className="cardrow__title">
            {category.name}
          </div>
          <div className="cardrow__buttons">
            <ViewAllButton/>
          </div>
        </div>
        <div className="cardrow__content">
          {category.subcategories.slice(0,5).map((subcategory: Subcategory)=>(
            <ProductSubcategory subcategory={subcategory}/>
          ))}
        </div>
      </div>
      
    </ProductCategoryRowStyles>
  )
}

export default ProductCategoryRow

const ProductCategoryRowStyles = styled.div`
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
  /* border: 1px solid black; */
  height: 340px;
  padding-top: 20px;

  .cardrow {
    display: flex;
    flex-direction: column;
  }

  .cardrow__header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    margin-bottom: 16px;

    .cardrow__title {
      color: #333;
      font-size: 24px;
      font-weight: bold;
    }

    .cardrow__buttons {
      
    }
  }

  .cardrow__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    display: grid;
    overflow: auto;
    grid-template-columns: repeat(5, 1fr);
  }
`