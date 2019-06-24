import React from 'react'
import SEO from './SEO'
import("../styles/main.scss")
import Footer from '../views/Footer'

const Layout = ({ children }) => (
  <>
    <SEO />
    {children}
    <Footer />
  </>
)

export default Layout
