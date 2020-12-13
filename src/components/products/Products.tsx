import React, { useEffect } from 'react'
import styled from 'styled-components'
import { categories } from '../../api'

const imgUrl = "https://images.weedmaps.com/creatives/000/001/333/graphic/original/1590590064-1588273944-1x1.png?bg=49DEFF&blend-align=right&blend-mode=normal&blend-pad=60&blend64=aHR0cHM6Ly9pbWFnZXMud2VlZG1hcHMuY29tL2NyZWF0aXZlcy8wMDAvMDA5LzkyNC9ncmFwaGljL29yaWdpbmFsLzE2MDUxMzY2NzQtUHJvZHVjdF9pbWFnZXNfMTAwMHgxMDAwX3YyLnBuZz9kcHI9MyZoPTQwMA&dpr=3&fit=crop&h=400&mark-align=left%2Cmiddle&mark-x=0&mark64=aHR0cHM6Ly9pbWFnZXMud2VlZG1hcHMuY29tL2NyZWF0aXZlcy8wMDAvMDA5LzkyMy9ncmFwaGljL29yaWdpbmFsLzE2MDUxMzY2NzItdGVtcGZpbGUyMDIwMTExMS03NC0xdGNqcTR1P2Rwcj0zJnc9MTQ0MA&mark_params%5Bdpr%5D=3&mark_params%5Bw%5D=1440&q=100&w=1440"


interface ProductsProps {

}

const Products: React.FC<ProductsProps> = ({}) => {

  return (
    <ProductsStyles>
      <div className="products-wrapper">
        <div className="banner">
          <img src={imgUrl} alt=""/>
        </div>
        <div className="categories">
          <div className="categories__title">Product categories</div>
          <div className="categories__cards">
            {categories && categories.map(category => (
              <div className="card">
                <img src={category.image} alt=""/>
                <div className="card__title noselect">{category.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      
    </ProductsStyles>
  )
} 

export default Products

const ProductsStyles = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding-top: 95px;

  .products-wrapper {
    display: flex;
    height: 100%;
    max-width: 75rem;
    margin: auto;
    flex-direction: column;
  }

  .banner {
    width: 100%;
    margin: 0 auto;
    
    img {
      border-radius: 20px;
      max-width: 75rem;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }

  .categories {
    padding: 2rem 0px;

    &__title{
      margin: 0px 0px 1rem;
      padding: 0px;
      font-size: 24px;
      font-weight: 700;
      letter-spacing: -0.003125rem;
      line-height: 1.75rem;
    }
    
    &__cards{
      box-sizing: border-box;
      margin: 0px;
      padding: 0px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
    }

    .card {
      cursor: pointer;

      img {
        width: 274px;
        height: 205px;
      }

      &__title {
        margin: 0.5rem 0px 0px;
        padding: 0px;
        font-size: 16px;
        color: rgb(37,41,53);
        text-align: center;
        
      }
    }
  }
`