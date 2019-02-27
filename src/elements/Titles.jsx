import styled from 'styled-components'
import tw from 'tailwind.macro'

export const Title = styled.h1`
  ${tw`text-5xl lg:text-5xl font-serif text-brand-blue mt-16 mb-8 tracking-wide relative inline-block`};
  text-transform: uppercase;
`

export const BigTitle = styled.h1`
  ${tw`text-5xl lg:text-6xl font-serif text-white mb-6 tracking-wide`};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`

export const Subtitle = styled.p`
  ${tw`text-2xl text-right lg:text-4xl font-sans text-brand-blue -mt-16`};
  text-transform: uppercase;
  font-weight: 800;
`
