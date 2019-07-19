import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled, { keyframes, css } from 'styled-components'
import tw from 'tailwind.macro'
import { Wordmark } from './Logo'

const Nav = styled.nav`
  ${props =>
    props.centered
      ? tw`flex items-center xl:justify-center justify-end flex-wrap w-full lg:px-32 z-10 absolute`
      : tw`flex items-center justify-between flex-wrap p-6 w-full lg:px-32 px-4 z-10 absolute`}
`

const growRight = keyframes`
  from {
    ${tw`w-0`};
  }
  to {
    ${tw`w-3/4`}
  }
`

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate(0, 1rem);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`

const shrinkRight = keyframes`
  from {
    ${tw`w-3/4`}
  }
  to {
    ${tw`w-0`};
  }
`

const growRightAnimation = css`
  ${growRight} 250ms ease-out forwards;
`

const shrinkRightAnimation = css`
  ${shrinkRight} 250ms ease-in forwards;
`

const fadeInUpAnimation = css`
  ${fadeInUp} 350ms ease-in forwards;
`

const MobileMenu = styled.div`
  ${tw`block xl:invisible visible py-6 px-16`};
  animation: ${shrinkRightAnimation};

  &.open {
    ${tw`px-6 shadow-lg`};
    animation: ${growRightAnimation};
    background: #1f506e;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
  }
`

const NavLinks = styled.div`
  ${tw`w-full flex-grow xl:flex xl:items-center xl:w-auto hidden xl:block pt-6 xl:pt-0 md:bg-transparent bg-blue`};
`

const NavLink = styled(props => <Link {...props} />)`
  ${tw`flex-1 px-4 py-2 m-2 lg:text-xl font-sans text-white`};
`

const MobileNavLink = styled(props => <Link {...props} />)`
  ${tw`py-2 m-2 my-6 md:text-3xl text-2xl font-sans font-bold text-white block`};

  animation: ${fadeInUpAnimation};
`

const LogoWrapper = styled.div`
  ${tw`flex items-center flex-no-shrink text-white mr-6 xl:mt-0 -mt-12`};
  width: 16rem;
`

class NavBar extends Component {
  state = {
    isMobileNavOpen: false,
    pages: [
      {
        name: 'Home',
        path: '/',
      },
      {
        name: 'Schedule',
        path: '/schedule',
      },
      {
        name: 'Code of Conduct',
        path: '/code-of-conduct',
      },
      {
        name: 'FAQ',
        path: '/faq',
      },
    ],
  }

  toggleMobileMenu = () => {
    this.setState(prevState => ({
      isMobileNavOpen: !prevState.isMobileNavOpen,
    }))
  }

  render() {
    const { centered, showLogo, theme, location } = this.props
    const { isMobileNavOpen, pages } = this.state

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

          <MobileMenu className={isMobileNavOpen ? 'open' : null}>
            <div id="nav-icon" className={isMobileNavOpen ? 'open' : null} onClick={this.toggleMobileMenu}>
              <span />
              <span />
              <span />
              <span />
            </div>

            {isMobileNavOpen &&
              pages.map(page => (
                <MobileNavLink to={page.path} activeClassName="active">
                  {page.name}
                </MobileNavLink>
              ))}
          </MobileMenu>

          <NavLinks>
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
