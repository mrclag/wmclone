import React from 'react'
import styled from 'styled-components'
import { CardRow } from '../cards/CardRow'

const imgUrl = "https://images.weedmaps.com/creatives/000/010/868/graphic/original/1605663203-2600x750_Lifted_spirits_for_less.png?bg=None&blend-align=right&blend-mode=normal&blend-pad=60&blend64=aHR0cHM6Ly9pbWFnZXMud2VlZG1hcHMuY29tL2NyZWF0aXZlcy8wMDAvMDEwLzg3MC9ncmFwaGljL29yaWdpbmFsLzE2MDU2NjMyMDUtMTAwMHgxMDAwLUxpZnRlZF9zcGlyaXRzX2Zvcl9sZXNzLnBuZz9kcHI9MyZoPTQwMA&dpr=3&fit=crop&h=400&mark-align=left%2Cmiddle&mark-x=0&mark64=aHR0cHM6Ly9pbWFnZXMud2VlZG1hcHMuY29tL2NyZWF0aXZlcy8wMDAvMDEwLzg2OS9ncmFwaGljL29yaWdpbmFsLzE2MDU2NjMyMDQtdGVtcGZpbGUyMDIwMTExOC00Mi0xdHFndTFiP2Rwcj0zJnc9MTQ0MA&mark_params%5Bdpr%5D=3&mark_params%5Bw%5D=1440&q=100&w=1440"

interface LandingProps {

}

export const Landing: React.FC<LandingProps> = ({}) => {
  return (
    <LandingStyles>
      <div className="carousel">
        <img src={imgUrl} alt=""/>
        <div className="carousel-buttons">
          <div className="button-left">
            <i className="fas fa-chevron-left"></i>
          </div>
          <div className="button"></div>
          <div className="button"></div>
          <div className="button selected"></div>
          <div className="button-right">
            <i className="fas fa-chevron-right"></i></div>
        </div>
      </div>

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

  .landing-wrapper {
    position: absolute;
    display: flex;
    flex-direction: row;
    height: 100%;
    max-width: 75rem;
    margin: 0 auto;
  }

  .carousel {
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
      
      .button-left,
      .button-right {
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
      .button {
        margin: 5px;
        height: 8px;
        width: 8px;
        background: #ddd;
        border-radius: 50%;
      }
      .selected {
        background: #4a4a4a !important;
      }
    }
  }
`
