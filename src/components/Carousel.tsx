import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const imgUrls = [
  "https://images.weedmaps.com/creatives/000/013/460/graphic/original/1607366415-112420_CRTV-3642_WMxKokoNuggz-Desktop_2251x844.png?bg=%23000000&blend-align=right&blend-mode=normal&blend-pad=60&blend64=aHR0cHM6Ly9pbWFnZXMud2VlZG1hcHMuY29tL2NyZWF0aXZlcy8wMDAvMDEzLzQ2Mi9ncmFwaGljL29yaWdpbmFsLzE2MDczNjY0MTgta29rb251Z3oucG5nP2Rwcj0zJmg9NDAw&dpr=3&fit=crop&h=400&mark-align=left%2Cmiddle&mark-x=0&mark64=aHR0cHM6Ly9pbWFnZXMud2VlZG1hcHMuY29tL2NyZWF0aXZlcy8wMDAvMDEzLzQ2MS9ncmFwaGljL29yaWdpbmFsLzE2MDczNjY0MTctdGVtcGZpbGUyMDIwMTIwNy0zMzAtMXAxenRxbD9kcHI9MyZ3PTE0NDA&mark_params%5Bdpr%5D=3&mark_params%5Bw%5D=1440&q=100&w=1440",
  "https://images.weedmaps.com/creatives/000/010/868/graphic/original/1605663203-2600x750_Lifted_spirits_for_less.png?bg=None&blend-align=right&blend-mode=normal&blend-pad=60&blend64=aHR0cHM6Ly9pbWFnZXMud2VlZG1hcHMuY29tL2NyZWF0aXZlcy8wMDAvMDEwLzg3MC9ncmFwaGljL29yaWdpbmFsLzE2MDU2NjMyMDUtMTAwMHgxMDAwLUxpZnRlZF9zcGlyaXRzX2Zvcl9sZXNzLnBuZz9kcHI9MyZoPTQwMA&dpr=3&fit=crop&h=400&mark-align=left%2Cmiddle&mark-x=0&mark64=aHR0cHM6Ly9pbWFnZXMud2VlZG1hcHMuY29tL2NyZWF0aXZlcy8wMDAvMDEwLzg2OS9ncmFwaGljL29yaWdpbmFsLzE2MDU2NjMyMDQtdGVtcGZpbGUyMDIwMTExOC00Mi0xdHFndTFiP2Rwcj0zJnc9MTQ0MA&mark_params%5Bdpr%5D=3&mark_params%5Bw%5D=1440&q=100&w=1440",
  "https://images.weedmaps.com/creatives/000/010/721/graphic/original/1605642548-2600x750-Cozy_up_with_some_bud.png?bg=None&blend-align=right&blend-mode=normal&blend-pad=60&blend64=aHR0cHM6Ly9pbWFnZXMud2VlZG1hcHMuY29tL2NyZWF0aXZlcy8wMDAvMDEwLzcyMy9ncmFwaGljL29yaWdpbmFsLzE2MDU2NDI1NTEtMTAwMHgxMDAwLUNvenlfdXBfd2l0aF9zb21lX2J1ZC5wbmc_ZHByPTMmaD00MDA&dpr=3&fit=crop&h=400&mark-align=left%2Cmiddle&mark-x=0&mark64=aHR0cHM6Ly9pbWFnZXMud2VlZG1hcHMuY29tL2NyZWF0aXZlcy8wMDAvMDEwLzcyMi9ncmFwaGljL29yaWdpbmFsLzE2MDU2NDI1NTAtdGVtcGZpbGUyMDIwMTExNy01NC1nNXp3NDQ_ZHByPTMmdz0xNDQw&mark_params%5Bdpr%5D=3&mark_params%5Bw%5D=1440&q=100&w=1440"
]

interface CarouselProps {
}

interface CarouselNavButtonProps {
  selected: boolean
}

const Carousel: React.FC<CarouselProps> = () => {
  const [carouselIndex, setCarouselIndex] = useState<number>(0)
  
  useEffect(()=>{
    const timer = setTimeout(nextImage, 5000)
    return () => clearTimeout(timer)
  })

  const nextImage = () => setCarouselIndex((carouselIndex + 1) % 3)
  const prevImage = () => setCarouselIndex((carouselIndex - 1) < 0 ? 2 : carouselIndex - 1)
  

  return (
    <CarouselStyles>
        <img src={imgUrls[carouselIndex]} className='carousel__image' alt=""/>
        <div className="carousel-buttons">
          <div className="button-left" onClick={prevImage}>
            <i className="fas fa-chevron-left"></i>
          </div>
          <CarouselNavButton selected={carouselIndex === 0} className="button" id="0" onClick={()=> setCarouselIndex(0)}></CarouselNavButton>
          <CarouselNavButton selected={carouselIndex === 1} className="button" id="1" onClick={()=> setCarouselIndex(1)}></CarouselNavButton>
          <CarouselNavButton selected={carouselIndex === 2} className="button" id="2" onClick={()=> setCarouselIndex(2)}></CarouselNavButton>
          <div className="button-right">
            <i className="fas fa-chevron-right" onClick={nextImage}></i></div>
        </div>
    </CarouselStyles>
  )
}

export default Carousel

const CarouselStyles = styled.div`
    width: 100%;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img {
      border-radius: 20px;
      max-width: 75rem;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    .carousel-buttons {
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
      
      .button-left,
      .button-right {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f7f7f7;
        color: #656565;
        height: 24px;
        width: 24px;
        border-radius: 50%;
        font-size: 12px;
        margin: 5px;
      }
      .selected {
        background: #4a4a4a !important;
      }
    }
`


const CarouselNavButton = styled.div`
  margin: 5px;
  height: 8px;
  width: 8px;
  background: ${(props: CarouselNavButtonProps) => props.selected ? '#4a4a4a' : '#ddd'};
  border-radius: 50%;
`