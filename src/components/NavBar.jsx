import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Nav = styled.nav`
  ${tw`flex justify-center top-0 w-ful z-100 h-16 items-center pt-8 -mb-16`};
`

const NavLink = styled.a`
  ${tw`flex-1 px-4 py-2 m-2 lg:text-xl font-sans text-white`};
  color: #1f506e;
  font-weight: 800;
  text-decoration: none;
  text-transform: uppercase;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), font-weight 400ms ease-out;

  &:hover {
    transform: translateY(-1px);
    transition: all 250ms ease-in;
    box-shadow: inset 0 0 0 white, inset 0px -4px 0 #1f506e;
  }
`

const NavBar = () => (
  <>
    <Nav>
      <div className="mx-auto px-6">
        <div className="flex items-center -mx-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/schedule">Schedule</NavLink>
          <NavLink href="">Code of Conduct</NavLink>
          <NavLink href="/schedule">Sponsor</NavLink>
          <NavLink href="">FAQ</NavLink>
        </div>
      </div>
    </Nav>
  </>
)

export default NavBar
