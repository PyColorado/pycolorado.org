import styled from 'styled-components'
import tw from 'tailwind.macro'

const Content = styled.div`
  ${tw`p-6 md:p-12 lg:p-24 h-screen justify-center items-center flex z-50`};
  background: ${props => props.bg};
  ${props => (props.height ? `height : ${props.height}` : null)};
`

export default Content
