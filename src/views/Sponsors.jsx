import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { DividerMiddle } from '../elements/Dividers'
import { Content } from '../elements'
import sponsors from '../data/sponsors.json'

const SponsorsWrapper = styled.div`
  ${tw`flex flex-wrap justify-center`};
`

const Wrapper = styled.a`
  ${tw`md:w-1/4 w-3/5p-2 z-50 rounded`};
  background: #1f506e;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &.summit {
    ${tw`md:w-1/3 w-full h-32 p-8`};

    &:hover {
      ${tw`shadow-xl`}
    }
  }

  &.front-range {
    ${tw`md:w-1/4 w-2/3 h-32 p-8`};

    &:hover {
      ${tw`shadow-xl`}
    }
  }

  &:hover {
    transform: translateY(-1px);
    transition: all 250ms ease-in;
  }
`

const Image = styled.div`
  ${tw`w-full h-full`};
  background-image:url('${props => props.bg}');
  background-repeat:no-repeat;
  background-size: contain;
  background-position: center center;
`

const Inner = styled.div`
  ${tw`w-full xl:w-4/5 text-center lg:text-left mt-8 mb-8`};
  background: ${props => props.bg};
`

const Sponsors = ({ children }) => (
  <>
    <DividerMiddle />
    <Content height="auto">
      <Inner>
        {children}
        <SponsorsWrapper>
          {sponsors.summit.map(sponsor => (
            <SponsorCard level="summit" key={sponsor.name} name={sponsor.name} img={sponsor.img} link={sponsor.link} />
          ))}
        </SponsorsWrapper>

        <SponsorsWrapper>
          {sponsors.front_range.map(sponsor => (
            <SponsorCard
              level="front-range"
              key={sponsor.name}
              name={sponsor.name}
              img={sponsor.img}
              link={sponsor.link}
            />
          ))}
        </SponsorsWrapper>
      </Inner>
    </Content>
  </>
)

const SponsorCard = ({ level, name, img, link }) => (
  <Wrapper className={level} href={link}>
    <Image className="__image" bg={`/sponsors/${img}`} />
  </Wrapper>
)

export { SponsorsWrapper, Sponsors, SponsorCard }

Sponsors.propTypes = {
  children: PropTypes.node.isRequired,
  // offset: PropTypes.number.isRequired,
}
