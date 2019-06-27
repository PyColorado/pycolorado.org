import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import cuttlesoft from '../images/sponsors/cuttlesoft.svg'

const Content = styled.div`
  ${tw`flex justify-center items-center w-full`};
`

const SponsorsWrapper = styled.a`
  ${tw`mt-8`};
`

const Title = styled.h1`
  ${tw`text-4xl text-white text-white tracking-wide`};
`

const Sponsor = styled.div`
  ${tw` text-center text-alt-white px-6 py-8 rounded`};
  background-color: #1f516e;
  background-image: url(${props => props.logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 80%;
  cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 20px rgba(0,0,0,.2);

  &.summit {
    ${tw`w-full py-16 px-24`};
  }

  &:hover {
    transform: translateY(-1px);
  }
`

const Sponsors = () => (
  <>
    <Content>
      <SponsorsWrapper href="https://cuttlesoft.com" target="_blank">
        <Title>Sponsored By:</Title>
        <Sponsor className="summit" logo={cuttlesoft} />
      </SponsorsWrapper>
    </Content>
  </>
)

export default Sponsors
