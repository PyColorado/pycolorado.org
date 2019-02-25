import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Content from '../elements/Content'
import bg from '../images/hero-bg.jpg'

const Wrapper = styled.div`
  ${tw`w-full -mt-64 xl:w-2/3 md:p-24 lg:p-32`};
`

const Hero = ({ children }) => (
  <>
    <Content bg={`url(${bg})`}>
      <Wrapper>{children}</Wrapper>
    </Content>
  </>
)

export default Hero

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
