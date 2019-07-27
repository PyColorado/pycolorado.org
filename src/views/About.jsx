import React from 'react'
import PropTypes from 'prop-types'
import tw from 'tailwind.macro'
import { Divider } from '../elements/Dividers'
import { Content } from '../elements'
import Inner from '../elements/Inner'
import TopoWhiteBG from '../images/topo-white.svg'

const About = ({ children }) => (
  <>
    <Divider
      bg={`#23262b url(${TopoWhiteBG}); background-size: cover;`}
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
    />
    <Content>
      <Inner style={tw`md:mb-64 mb-64`}>{children}</Inner>
    </Content>
  </>
)

export default About

About.propTypes = {
  children: PropTypes.node.isRequired,
  // offset: PropTypes.number.isRequired,
}
