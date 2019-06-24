import styled from 'styled-components'
import tw from 'tailwind.macro'

export const Content = styled.div`
  ${tw`p-6 md:p-12 lg:p-24 h-screen justify-center items-center flex z-50`};
  background: ${props => props.bg};
  ${props => (props.height ? `height : ${props.height}` : null)};
`

export const PageContent = styled.div`
  ${tw`xxl:p-24 xl:p-24 h-screen justify-center items-center flex z-50`};
  background: ${props => props.bg};
  ${props => (props.height ? `height : ${props.height}` : null)};
`

export const Section = styled.div`
  ${tw`sm:w-full xxl:w-3/4 xxxl:w-1/2 text-left mt-24 py-8 px-16 z-50`};
  background: ${props => props.bg};
`
