import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Content } from '../elements'
import bg from '../images/hero-optimized.jpg'

const Wrapper = styled.div`
  ${tw`xl:w-2/3 w-full flex-col items-center justify-between lg:py-32 md:p-24`};
`
const Hero = ({ children }) => (
  <>
    <Content bg={`#fffff6 url(${bg}) no-repeat center center; background-size: cover;`}>
      <Wrapper>{children}</Wrapper>
    </Content>
  </>
)

export default Hero

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  // offset: PropTypes.number.isRequired,
}
