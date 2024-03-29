import React from 'react'
import styled from 'styled-components'

interface LeftRightProps {}

const LeftRight: React.FC<LeftRightProps> = ({}) => {
  return (
    <LeftRightStyles>
      <div className="prev">
        <i className="fas fa-chevron-left"/>
      </div>
      <div className="next">
        <i className="fas fa-chevron-right"/>
      </div>
    </LeftRightStyles>
  )
}

export default LeftRight

const LeftRightStyles = styled.div`
    display: inline-flex;
    margin-left: 0.5rem;
    vertical-align: bottom;
    .next,
    .prev {
        background: white;
        display: inline-flex;
        justify-content: space-around;
        align-items: center;
        color: rgb(51, 51, 51);
        font-size: 14px;
        border: 0.0625rem solid rgb(221, 221, 221);
        border-radius: 0.25rem;
        position: relative;
        height: 2.5rem;
        width: 2.75rem;
        z-index: 30;
        cursor: pointer;
        user-select: none;
      }
`