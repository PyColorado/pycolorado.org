import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Wordmark from './Logo'

// justify-content: ${props => (props.centered ? 'center' : 'space-between')};
const Nav = styled.nav`
  ${tw`flex items-center justify-between flex-wrap p-6 w-full z-10 -mb-32`};
`

const MobileMenu = styled.div`
  ${tw`block xl:invisible visible`};
`

const NavLinks = styled.div`
  ${tw`w-full flex-grow xl:flex xl:items-center xl:w-auto hidden xl:block pt-6 xl:pt-0`};
`

const NavLink = styled(props => <Link {...props} />)`
  ${tw`flex-1 px-4 py-2 m-2 lg:text-xl font-sans text-white`};
`

const LogoWrapper = styled.div`
  ${tw`flex items-center flex-no-shrink text-white mr-6`};
  width: 16rem;
`

class NavBar extends Component {
  state = {
    isMobileNavOpen: false,
  }

  toggleMobileMenu = () => {
    this.setState(prevState => ({
      isMobileNavOpen: !prevState.isMobileNavOpen,
    }))
  }

  render() {
    const { centered, showLogo, theme } = this.props
    const { isMobileNavOpen } = this.state

    return (
      <>
        <Nav centered={centered}>
          {showLogo && (
            <LogoWrapper>
              <NavLink to="/">
                <Wordmark />
              </NavLink>
            </LogoWrapper>
          )}

          <MobileMenu>
            <button className="flex items-center px-3 py-2" onClick={ this.toggleMobileMenu }>
              <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
              </svg>
            </button>
          </MobileMenu>

          <NavLinks style={isMobileNavOpen ? { display: 'block' } : null }>
            <div className="flex items-center -mx-6">
              {location.pathname !== '/' && (
                <NavLink to="/" className={`nav-link ${theme}`} activeClassName="active">
                  Home
                </NavLink>
              )}
              <NavLink to="/schedule" className={`nav-link ${theme}`} activeClassName="active">
                Schedule
              </NavLink>
              <NavLink to="/code-of-conduct" className={`nav-link ${theme}`} activeClassName="active">
                Code of Conduct
              </NavLink>
              <NavLink to="/sponsor" className={`nav-link ${theme}`} activeClassName="active">
                Sponsor
              </NavLink>
              <NavLink to="/faq" className={`nav-link ${theme}`} activeClassName="active">
                FAQ
              </NavLink>
            </div>
          </NavLinks>
        </Nav>
      </>
    )
  }
}

export default NavBar
