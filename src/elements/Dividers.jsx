import styled from 'styled-components'
import tw from 'tailwind.macro'

export const Divider = styled.div`
  ${tw`absolute w-full h-full`};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
  ${props => (props.height ? `height : ${props.height}` : null)};
`

export const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
  height: 120%;
`
