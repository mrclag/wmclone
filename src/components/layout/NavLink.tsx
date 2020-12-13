import React, { useEffect } from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import styled from 'styled-components'

interface NavLinkProps {
  name: string,
  url: string,
}

interface NavLinkStyleProps {
  selected: boolean
}



const NavLink: React.FC<NavLinkProps & RouteComponentProps> = ({name, url}) => {
  const selected = url === window.location.pathname

  useEffect(()=>{},[window.location.pathname])

  return (
    <NavLinkStyles selected={selected}>
      <Link to={url}>
        <span className="navlink">{name}</span>
      </Link>
    </NavLinkStyles>
  )
}

export default withRouter(NavLink)

const NavLinkStyles = styled.div`
    
    .navlink {
      font-size: 14px;
      /* color: rgb(104, 104, 104); */
      color: ${(props: NavLinkStyleProps) => props.selected ? 'rgb(0, 168, 163)' : 'rgb(104, 104, 104)'};
      font-weight: ${(props: NavLinkStyleProps) => props.selected ? '700' : '400'};
      padding: 0px 12px 0px 4px;
      cursor: pointer;

      &:hover {
        color: rgb(0, 168, 163);
      }
  }
`;