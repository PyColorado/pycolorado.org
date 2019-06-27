import tw from 'tailwind.macro'
import styled from 'styled-components'

const Inner = styled.div`
  ${tw`w-full xl:w-3/4 text-center lg:text-left mt-64 mb-8`};
  background: ${props => props.bg};
`

export default Inner
