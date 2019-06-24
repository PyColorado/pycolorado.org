import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Content } from '../elements'
import bg from '../images/hero-bg.svg'

const Wrapper = styled.div`
  ${tw`w-full -mt-64 xl:w-2/3 md:p-24 lg:py-32`};
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
