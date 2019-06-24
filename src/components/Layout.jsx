import React from 'react'
import SEO from './SEO'
import Footer from '../views/Footer'

import("../styles/main.scss")

const Layout = ({ children }) => (
  <>
    <SEO />
    {children}
    <Footer />
  </>
)

export default Layout
