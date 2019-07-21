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
    <Divider>
      {/* <UpDown>
        <SVG icon="box" hiddenMobile width={6} fill={colors.blue} left="50%" top="75%" />
        <SVG icon="upDown" hiddenMobile width={8} fill={colors['white']} left="70%" top="20%" />
        <SVG icon="triangle" width={8} stroke={colors['white']} left="25%" top="15%" />
      </UpDown> */}
      {/* <UpDownWide>
        <SVG icon="triangle" width={12} stroke={colors.white} left="95%" top="50%" />
        <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
        <SVG icon="upDown" hiddenMobile width={8} fill={colors['white']} left="45%" top="10%" />
      </UpDownWide> */}
      {/* <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
      <SVG icon="circle" width={12} fill={colors['white']} left="70%" top="60%" />
      <SVG icon="box" width={12} fill={colors['white']} left="20%" top="30%" />
      <SVG icon="hexa" width={8} stroke={colors['white']} left="80%" top="70%" /> */}
    </Divider>
    <Content>
      <Inner style={tw`md:mb-72 mb-48`}>{children}</Inner>
    </Content>
  </>
)

export default About

About.propTypes = {
  children: PropTypes.node.isRequired,
  // offset: PropTypes.number.isRequired,
}
