import styled from 'styled-components'
import tw from 'tailwind.macro'

export const Content = styled.div`
  ${tw`p-6 md:p-12 lg:p-24 h-screen justify-center items-center flex z-50`};
  background: ${props => props.bg};
  ${props => (props.height ? `height : ${props.height}` : null)};
`

export const PageContent = styled.div`
  ${tw`h-screen justify-center items-center flex z-50 mt-16`};
  background: ${props => props.bg};
  ${props => (props.height ? `height : ${props.height}` : null)};
`

export const Section = styled.div`
  ${tw`lg:w-3/4 w-11/12 text-left mt-24 md:p-16 p-4 z-0 shadow-lg`};
  background: ${props => props.bg};
`
