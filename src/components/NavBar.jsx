import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Wordmark } from './Logo'

const Nav = styled.nav`
  ${props =>
    props.centered
      ? tw`flex items-center xl:justify-center justify-end flex-wrap p-6 w-full lg:px-32 px-4 z-10 absolute`
      : tw`flex items-center justify-between flex-wrap p-6 w-full lg:px-32 px-4 z-10 absolute`}
`

const MobileMenu = styled.div`
  ${tw`block xl:invisible visible mt-4`};
`

const NavLinks = styled.div`
  ${tw`w-full flex-grow xl:flex xl:items-center xl:w-auto hidden xl:block pt-6 xl:pt-0 md:bg-transparent bg-blue`};
`

const NavLink = styled(props => <Link {...props} />)`
  ${tw`flex-1 px-4 py-2 m-2 lg:text-xl font-sans text-white`};
`

const LogoWrapper = styled.div`
  ${tw`flex items-center flex-no-shrink text-white mr-6 xl:mt-0 -mt-12`};
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
    const { centered, showLogo, theme, location } = this.props
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
            <div id="nav-icon3" className={isMobileNavOpen ? 'open' : null} onClick={this.toggleMobileMenu}>
              <span />
              <span />
              <span />
              <span />
            </div>
          </MobileMenu>

          <NavLinks style={isMobileNavOpen ? { display: 'block' } : null}>
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
              {/* <NavLink to="/sponsor" className={`nav-link ${theme}`} activeClassName="active">
              Sponsor
            </NavLink> */}
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
