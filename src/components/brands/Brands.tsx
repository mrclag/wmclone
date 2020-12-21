import React, { useState } from 'react'
import styled from 'styled-components'
import { CardRow } from '../cards/CardRow'
import Carousel from '../Carousel'

const imgUrls = [
  "https://images.weedmaps.com/creatives/000/013/460/graphic/original/1607366415-112420_CRTV-3642_WMxKokoNuggz-Desktop_2251x844.png?bg=%23000000&blend-align=right&blend-mode=normal&blend-pad=60&blend64=aHR0cHM6Ly9pbWFnZXMud2VlZG1hcHMuY29tL2NyZWF0aXZlcy8wMDAvMDEzLzQ2Mi9ncmFwaGljL29yaWdpbmFsLzE2MDczNjY0MTgta29rb251Z3oucG5nP2Rwcj0zJmg9NDAw&dpr=3&fit=crop&h=400&mark-align=left%2Cmiddle&mark-x=0&mark64=aHR0cHM6Ly9pbWFnZXMud2VlZG1hcHMuY29tL2NyZWF0aXZlcy8wMDAvMDEzLzQ2MS9ncmFwaGljL29yaWdpbmFsLzE2MDczNjY0MTctdGVtcGZpbGUyMDIwMTIwNy0zMzAtMXAxenRxbD9kcHI9MyZ3PTE0NDA&mark_params%5Bdpr%5D=3&mark_params%5Bw%5D=1440&q=100&w=1440",
  "https://images.weedmaps.com/creatives/000/010/868/graphic/original/1605663203-2600x750_Lifted_spirits_for_less.png?bg=None&blend-align=right&blend-mode=normal&blend-pad=60&blend64=aHR0cHM6Ly9pbWFnZXMud2VlZG1hcHMuY29tL2NyZWF0aXZlcy8wMDAvMDEwLzg3MC9ncmFwaGljL29yaWdpbmFsLzE2MDU2NjMyMDUtMTAwMHgxMDAwLUxpZnRlZF9zcGlyaXRzX2Zvcl9sZXNzLnBuZz9kcHI9MyZoPTQwMA&dpr=3&fit=crop&h=400&mark-align=left%2Cmiddle&mark-x=0&mark64=aHR0cHM6Ly9pbWFnZXMud2VlZG1hcHMuY29tL2NyZWF0aXZlcy8wMDAvMDEwLzg2OS9ncmFwaGljL29yaWdpbmFsLzE2MDU2NjMyMDQtdGVtcGZpbGUyMDIwMTExOC00Mi0xdHFndTFiP2Rwcj0zJnc9MTQ0MA&mark_params%5Bdpr%5D=3&mark_params%5Bw%5D=1440&q=100&w=1440",
  "https://images.weedmaps.com/creatives/000/010/721/graphic/original/1605642548-2600x750-Cozy_up_with_some_bud.png?bg=None&blend-align=right&blend-mode=normal&blend-pad=60&blend64=aHR0cHM6Ly9pbWFnZXMud2VlZG1hcHMuY29tL2NyZWF0aXZlcy8wMDAvMDEwLzcyMy9ncmFwaGljL29yaWdpbmFsLzE2MDU2NDI1NTEtMTAwMHgxMDAwLUNvenlfdXBfd2l0aF9zb21lX2J1ZC5wbmc_ZHByPTMmaD00MDA&dpr=3&fit=crop&h=400&mark-align=left%2Cmiddle&mark-x=0&mark64=aHR0cHM6Ly9pbWFnZXMud2VlZG1hcHMuY29tL2NyZWF0aXZlcy8wMDAvMDEwLzcyMi9ncmFwaGljL29yaWdpbmFsLzE2MDU2NDI1NTAtdGVtcGZpbGUyMDIwMTExNy01NC1nNXp3NDQ_ZHByPTMmdz0xNDQw&mark_params%5Bdpr%5D=3&mark_params%5Bw%5D=1440&q=100&w=1440"
]
interface BrandsProps {

}

const Brands: React.FC<BrandsProps> = ({}) => {
  const [category, setCategory] = useState('discover')



  return (
    <BrandsStyles>
        <div className="banner">
          <Carousel images={imgUrls} size='large'/>
        </div>
      <div className="wrapper">
        <div className='brands-title'>
          <div className='brands-bold'> Brands </div>
          <div className="hr">|</div>
          <div>Discover. Learn. Explore</div>
        </div>
      </div>
      <div className="categories-nav">
        <div className="wrapper">
          <div className="categories-buttons">
            <CategoryButton selected={true} onClick={()=>setCategory('discover')}>Discover</CategoryButton>
            <CategoryButton onClick={()=>setCategory('flower')}>Flower</CategoryButton>
            <CategoryButton onClick={()=>setCategory('concentrates')}>Concentrates</CategoryButton>
            <CategoryButton onClick={()=>setCategory('vapepens')}>Vape pens</CategoryButton>
            <CategoryButton onClick={()=>setCategory('edibles')}>Edibles</CategoryButton>
            <CategoryButton onClick={()=>setCategory('cbdthc')}>CDB/THC</CategoryButton>
            <CategoryButton onClick={()=>setCategory('cbd')}>CBD</CategoryButton>
            <CategoryButton onClick={()=>setCategory('allbrands')}>All Brands</CategoryButton>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <CardRow type="Featured brands" buttons={{}}/>
        <CardRow type="Featured brands" buttons={{}}/>
        <CardRow type="Featured brands" buttons={{}}/>
        <CardRow type="Featured brands" buttons={{}}/>
      </div>

      

    </BrandsStyles>
  )
}

export default Brands



interface CategoryButtonStyles {
  selected?: boolean;
}

const BrandsStyles = styled.div`

  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding-top: 95px;

  .banner {
    width: 100vw;
    img {
      max-height: 400px;
    }
  }

  .wrapper {
    width: 75rem;
    margin: auto;
  }

  

  .brands-title {
    width: 100%;
    font-weight: normal;
    text-transform: uppercase;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: auto;
    color: #4a4a4a;
    font-size: 34px;
    padding-top: 20px;

    .hr {
      margin: 0;
      padding: 10px;;
      transform: translateY(-4px);
      font-weight: 700;
    }

    .brands-bold {
      font-size: 36px;
      font-weight: 700;
    }
  }


  .categories-nav {
    box-shadow: rgb(223, 223, 223) 0px -0.0625rem 0px 0px inset;

    .categories-buttons {
      display: flex;
      width: 100%;
    }

    
  }
  
`

const CategoryButton = styled.button`
      width: auto;
      padding: 15px 20px;
      cursor: pointer;
      outline: none;
      background: transparent;
      border: none;
      font-size: 0.875rem;
      color: rgb(165, 169, 177);
      font-weight: normal;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      margin-bottom: 0px;
      padding: 0.9375rem 1rem 0.75rem;
      text-align: center;
      text-decoration: none;
      width: 100%;

      ${(props: CategoryButtonStyles) => props.selected ? 
        'border-bottom: 3px solid teal;' +
        'font-weight: 700;' +
        'color: #252935;':
        'border-bottom: none'
      } 
`