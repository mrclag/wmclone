import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'
import {navLinks} from '../../data/links'
import NavLink from './NavLink'
import useOnClickOutside from '../../utils/useOnClickOutside'

interface NavbarProps {

}

export const Navbar: React.FC<NavbarProps> = () => {
  // const [showProductDropdown, setShowProductDropdown] = useState(false)

  const [openDropdown, setOpenDropdown] = useState(false)

  const searchBarRef = useRef<HTMLDivElement>(null)
  
  useOnClickOutside(searchBarRef, () => {
    if (openDropdown) {
      setOpenDropdown(false);
    }
  });
  return (
    <NavbarStyles openDropdown={openDropdown}>
      <div className="nav-wrapper">
        <Link to='/' className="logo">
          <img src={logo} alt=""/>
        </Link>
        <div className="navcontent">
          <div className="nav-top">

            {/* Search bars */}
            <div ref={searchBarRef} className="searchbars">
              <div className="searchbar">
                <div className="searchbar__product">
                  <i className="fas fa-search"></i>
                  <input onClick={()=>setOpenDropdown(true)} type="text" placeholder='Products, retailers, brands, and more'/>
                </div>
                <div className="search__dropdown">DROPDOWN</div>
              </div>
              <hr/>
              <div className="searchbar">
                <div className="searchbar__location">
                  <i className="fas fa-map-marker-alt"></i>
                  <input type="text" placeholder='41 Discovery, Irvine, CA'/>
                </div>
              </div>
            </div>

            {/* User actions */}
            <div className="user-actions">
              <i className="fas fa-bell"></i>
              <i className="fas fa-shopping-cart"></i>
              <i className="fas fa-user"></i>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="nav-bottom">
            <div className="navigation">
              {navLinks && navLinks.map((navLink)=> <NavLink name={navLink.name} url={navLink.url}/>)}
              <span className="navlinkbutton">Order online</span>
            </div>
          </div>
        </div>
      </div>
    </NavbarStyles>
  )
}

interface NavbarStylesProps {
  openDropdown: boolean
}

const NavbarStyles = styled.div`
	height: 95px;
  border-bottom: 1px solid #ebeaea;
  width: 100%;
  margin: 0 auto;
  position: fixed;
  z-index: 20;
  background: white;

  .nav-wrapper {
    display: flex;
    flex-direction: row;
    height: 100%;
    max-width: 75rem;
    margin: 0px auto;
  }

  .navcontent {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .nav-top {
    display: flex;
    height: 50%;
    width: 100%;
    justify-content: space-between;
  }

  .searchbars {
    display: flex;
    margin-top: auto;
    flex-direction: row;
    width: 675px;
    border-radius: 0.375rem;
    height: 34px;
    overflow: hidden;
    background: #eee;
    border: 0.0625rem solid #eee;

    ${(props: NavbarStylesProps) => props.openDropdown && (
      'background: white;' +
      'border: 0.0625rem solid rgb(204, 204, 204);'
    )}
    /* background: white;
    border: 0.0625rem solid rgb(204, 204, 204); */

    .searchbar {
      width: 49%;

      .search__dropdown{
        z-index: 30;
        background: white;
      }
    }

    hr {
      color: #999;
    }

    .fas {
      color: #999;
      font-size: 14px;
    }
    .fa-search {
      margin-left: 8px;
    }

    input {
      border: none;
      outline: none;
      height: 32px;
      margin-top: 1px;
      text-overflow: ellipsis;
      padding-left: 8px;
      background: transparent;
      width: 90%;
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #aaa;
        opacity: 1; /* Firefox */
      }

    }
  }


  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    max-width: 110px;
    height: 100%;
    img {
      height: 50px;
      width: 50px
    }
  }

  .nav-bottom {
    height: 50%;
    display: flex;
    align-items: center;
  }
  .navigation {
    display: flex;
    height: 26px;
    align-items: center;
    

    .navlinkbutton {
      cursor: pointer;
      font-size: 14px;
      color: white;
      background: rgb(0, 168, 163);
      border-radius: 0.875rem;
      padding: 0.25rem 0.75rem;
    }
    
  }


  .user-actions {
    margin-top: 10px;
    font-size: 20px;
    color: #4a4a4a;
    .fas {
      cursor: pointer;
      padding: 10px;
    }
    .fa-user {
      padding: 3px;
      width: 18px;
      height: 18px;
      margin: 10px;
	    transition: all 300ms ease 0s;
      /* border: 1px solid #4a4a4a; */
      /* border-radius: 50%; */
      &:hover {
        color: #818181;
        border-color: #818181;
      }
    }
  }
`