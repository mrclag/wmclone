import React, { useState } from 'react'
import styled from 'styled-components'

interface PillButtonProps {
  text: string
}
interface PillButtonStylesProps {
  selected: boolean
}

const PillButton: React.FC<PillButtonProps> = ({text}) => {
  const [selected, setSelected] = useState(false)

  return (
    <PillButtonStyles className='noselect' onClick={()=>setSelected(!selected)} selected={selected}>
      {text}
    </PillButtonStyles>
  )
}

export default PillButton

const PillButtonStyles = styled.div`
  display: flex;
  background-color: ${(props: PillButtonStylesProps) => props.selected ? '#00A8A3': 'white'};
  border: 0.0625rem solid ${(props: PillButtonStylesProps) => props.selected ? '#00A8A3': '#ccc'};
  border-radius: 1rem;
  font-weight: bold;
  font-size: 12px;
  align-items: center;
  cursor: pointer;
  margin: 0px;
  margin-right: 0.5rem;
  color: ${(props: PillButtonStylesProps) => props.selected ? 'white': '#4a4a4a;'};
  padding: 0.25rem 1rem;
  flex: 0 0 auto;

  &:hover {
    border-color: #00A8A3;
  }
`