import React from 'react'
import styled from 'styled-components'

interface ViewAllButtonProps {

}

const ViewAllButton: React.FC<ViewAllButtonProps> = () => {
	
  return (
    <ViewAllButtonStyles className="cardrow__button">
      <div>

        View All
      </div>
    </ViewAllButtonStyles>
  )
}

export default ViewAllButton

const ViewAllButtonStyles = styled.div`
	margin-left: 0.5rem;
	box-sizing: border-box;
	color: #666;
  cursor: pointer;
	text-decoration: none;
	-webkit-box-align: center;
	align-items: center;
	background: white;
	border: 0.0625rem solid #ddd;
	border-radius: 0.25rem;
	display: inline-flex;
	justify-content: space-around;
	position: relative;
	height: 2.5rem;
	transition: all 300ms ease 0s;
  font-size: 14px;
	font-weight: 600;
	padding: 0px 1rem;
	user-select: none;
	white-space: nowrap;
	width: auto;

  &:hover {
    color: rgb(255, 255, 255);
    background: rgb(0, 168, 163);
    border-color: rgb(1, 168, 163);
  }
`