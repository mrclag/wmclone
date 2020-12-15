import React, { useEffect, useState } from 'react'
import styled from 'styled-components'



interface CarouselProps {
  size: string,
  images: string[],
}



const Carousel: React.FC<CarouselProps> = ({size, images}) => {
  const [carouselIndex, setCarouselIndex] = useState<number>(0)
  
  useEffect(()=>{
    const timer = setTimeout(nextImage, 5000)
    return () => clearTimeout(timer)
  })

  const nextImage = () => setCarouselIndex((carouselIndex + 1) % 3)
  const prevImage = () => setCarouselIndex((carouselIndex - 1) < 0 ? 2 : carouselIndex - 1)
  

  return (
    <CarouselStyles size={size}>
        <img src={images[carouselIndex]} className='carousel__image' alt=""/>
        <div className="carousel-buttons">
          <div className="button-left" onClick={prevImage}>
            <i className="fas fa-chevron-left"></i>
          </div>
          {images.map((img, i)=>(
            <CarouselNavButton selected={carouselIndex === i} className="button" onClick={()=> setCarouselIndex(i)}/>
          ))}
          <div className="button-right">
            <i className="fas fa-chevron-right" onClick={nextImage}></i></div>
        </div>
    </CarouselStyles>
  )
}

export default Carousel


interface CarouselStylesProps {
  size: string,
}

const CarouselStyles = styled.div`
    width: 100%;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img {
      border-radius: 20px;
      max-width: 75rem;
      width: 75rem;
      margin-top: 10px;
      margin-bottom: 10px;

      ${(props: CarouselStylesProps) => props.size === 'large' && (
        'margin-top: 0px;' +
        'border-radius: 0px;' +
        'max-width: 100vw;' +
        'width: 100vw;')};
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

interface CarouselNavButtonProps {
  selected: boolean
}

const CarouselNavButton = styled.div`
  margin: 5px;
  height: 8px;
  width: 8px;
  background: ${(props: CarouselNavButtonProps) => props.selected ? '#4a4a4a' : '#ddd'};
  border-radius: 50%;
`