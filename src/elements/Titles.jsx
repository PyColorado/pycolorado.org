import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import scale from '../images/scale.svg'

export const Title = styled.h1`
  ${tw`text-5xl lg:text-5xl text-primary mt-16 mb-8 tracking-wide relative inline-block uppercase`};
`

export const BigTitle = styled.h1`
  ${tw`text-5xl lg:text-6xl text-white mb-6 tracking-wide`};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`

export const SectionTitle = styled.h1`
  ${tw`lg:text-6xl text-3xl text-left text-white mb-6 tracking-wide z-50 p-4 leading-none`};
  color: ${props => props.color || '#1f506e'};
  background-color: ${props => props.bg || 'rgba(255, 255, 246, 0.9)'};
`

export const Subtitle = styled.div`
  ${tw`text-right md:-mt-8 -mt-4 md:text-3xl text-xl font-bold text-blue-900 uppercase`};
`

const PageTitleHeading = styled.h1`
  ${tw`md:text-6xl text-4xl text-blue-900 md:text-center text-left`};
`

const Scale = styled.div`
  ${tw`w-full mx-auto h-16 -mt-8 mb-16 md:block hidden`};
  background: ${props => props.bg};
`

export const PageTitle = ({ title, showScale }) => (
  <>
    <PageTitleHeading>{title}</PageTitleHeading>
    {showScale && <Scale bg={`url(${scale}) no-repeat center center; background-size: contain;`} />}
  </>
)

PageTitle.defaultProps = {
  showScale: true,
}
