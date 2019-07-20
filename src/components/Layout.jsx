import React from 'react'
import SEO from './SEO'
import NavBar from './NavBar'
import Footer from '../views/Footer'

import('../styles/main.scss')

const Layout = ({ children, position, showLogo, theme, location }) => (
  <>
    <SEO />
    <NavBar position={position} showLogo={showLogo} theme={theme} location={location} />
    {children}
    <Footer />
  </>
)

export default Layout
