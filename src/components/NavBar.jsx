import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled, { keyframes, css } from 'styled-components'
import tw from 'tailwind.macro'
import { Wordmark } from './Logo'
import config from '../../config/website'

const growRightFull = keyframes`
  from {
    ${tw`w-0`};
  }
  to {
    ${tw`w-full`}
  }
`

const growRightTwoFifths = keyframes`
  from {
    ${tw`w-0`};
  }
  to {
    ${tw`w-2/5`}
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
    ${tw`w-full`}
  }
  to {
    ${tw`w-0`};
  }
`

const growRightFullAnimation = css`
  ${growRightFull} 250ms ease-out forwards;
`

const growRightTwoFifthsAnimation = css`
  ${growRightTwoFifths} 250ms ease-out forwards;
`

const shrinkRightAnimation = css`
  ${shrinkRight} 250ms ease-in forwards;
`

const fadeInUpAnimation = css`
  ${fadeInUp} 350ms ease-in forwards;
`

const Nav = styled.nav`
  ${tw`flex items-center justify-between w-11/12 lg:w-3/4 mx-auto h-32 -mb-32`}

  &.centered {
    ${tw`xl:w-1/2 xl:justify-between w-3/4 justify-end`}
  }

  a {
    ${tw`text-sm`}

    &.nav-link {
      color: #1f506e;
      border-bottom: none;
      font-weight: 600;
      text-decoration: none;
      text-transform: uppercase;
      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), font-weight 400ms ease-out;

      &:hover {
        border-bottom: none;
        transform: translateY(-1px);
        transition: all 250ms ease-in;
        box-shadow: inset 0 0 0 white, inset 0px -2px 0 #1f506e;
      }

      &.lighten {
        color: #ededed;

        &:hover {
          box-shadow: inset 0 0 0 white, inset 0px -2px 0 #ededed;
        }
      }

      &.active {
        box-shadow: inset 0 0 0 white, inset 0px -2px 0 #1f506e;

        &.lighten {
          box-shadow: inset 0 0 0 white, inset 0px -2px 0 #ededed;
        }
      }
    }
  }
`

const MobileMenu = styled.div`
  ${tw`flex xl:hidden content-between inline-block pr-8 pt-4`};
  animation: ${shrinkRightAnimation};

  &.open {
    ${tw`px-6 shadow-lg z-10 pt-8`};
    background: #1f506e;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;

    animation: ${growRightFullAnimation};
    @media (min-width: 768px) {
      animation: ${growRightTwoFifthsAnimation};
    }

    a {
      ${tw`md:text-2xl text-3xl`};
    }
  }
`

const NavLinks = styled.div`
  ${tw`xl:w-auto hidden xl:block pt-6 xl:pt-0 md:bg-transparent bg-blue`};
`

const NavLink = styled(props => <Link {...props} />)`
  ${tw`flex-1 items-center p-1 m-2 lg:text-xl font-sans text-white`};
`

const MobileNavLink = styled(props => <Link {...props} />)`
  ${tw`py-2 m-2 my-6 font-sans font-bold text-white block`};
  animation: ${fadeInUpAnimation};

  &.active {
    text-decoration: underline;
  }
`

const LogoWrapper = styled.div`
  ${tw`flex items-center min-w-48 w-48 mt-2 -ml-4`};
`

const NavButton = styled.a`
  text-decoration: none !important;
  ${tw`xl:block hidden bg-blue-600 hover:bg-blue-100 uppercase text-center text-white font-bold py-2 px-4 rounded`};

  &:hover {
    color: #1f506e;
  }

  &.mobile {
    ${tw`block md:w-10/12 w-10/12 md:text-2xl text-4xl normal-case ml-2 absolute`};
    bottom: 8rem;
    animation: ${fadeInUpAnimation};
  }
`

const MenuIcon = ({ isMobileNavOpen, position, onClick }) => (
  <>
    <div id="nav-icon" className={isMobileNavOpen ? `${position} open` : `${position}`} onClick={onClick} >
      <span />
      <span />
      <span />
      <span />
    </div>
  </>
)

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
    const { position, showLogo, theme, location } = this.props
    const { isMobileNavOpen, pages } = this.state

    return (
      <>
        <Nav position={position} className={position}>
          {showLogo && (
            <LogoWrapper>
              <NavLink to="/">
                <Wordmark />
              </NavLink>
            </LogoWrapper>
          )}

          <NavLinks>
            {pages.map(page => (
              <NavLink key={page.name} className={`nav-link ${theme}`} to={page.path} activeClassName="active">
                {page.name}
              </NavLink>
            ))}
          </NavLinks>

          <MobileMenu className={isMobileNavOpen ? `${position} open` : `${position}`}>
            <MenuIcon position={position} isMobileNavOpen={isMobileNavOpen} onClick={this.toggleMobileMenu} />
            {isMobileNavOpen &&
              pages.map(page => (
                <MobileNavLink key={page.name} to={page.path} activeClassName="active">
                  {page.name}
                </MobileNavLink>
              ))}
            {isMobileNavOpen && (
              <NavButton className="mobile" href={config.titoBaseURL} target="_blank">
                Buy Tickets
              </NavButton>
            )}
          </MobileMenu>

          <NavButton href={config.titoBaseURL} target="_blank">
            Buy Tickets
          </NavButton>
        </Nav>
      </>
    )
  }
}

export default NavBar
