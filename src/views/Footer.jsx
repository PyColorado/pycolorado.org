import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Contact from './Contact'

const Inner = styled.div`
  ${tw`w-full xxl:w-3/4 text-center lg:text-left mt-24 mb-8`};
  background: ${props => props.bg};
`

const ContactText = styled.div`
  ${tw`text-alt-white text-center font-sans md:mb-4 text-3xl`};
`

const MapText = styled.p`
  ${tw`text-center text-alt-white mt-8 pin-b p-2 font-mono text-sm`};

  > h2 {
    ${tw`font-mono text-alt-white text-xl font-bold`}
  }

  p:first-of-type {
    ${tw`-mt-8`}
  }
`

const Footer = () => (
  <>
    <MapText>
      <h2>COUNTOUR INTERVAL 40 FEET</h2>
      <p>NATIONAL GEODETIC VERTICAL DATUM OF 1929</p>
      <br />
      <p>
        THIS MAP DOES NOT COMPLY WITH NATIONAL MAP ACCURACY STANDARDS
        <br />
        FOR SALE BY U.S. GEOLOGICAL SURVEY, P.O. BOX 25286, DENVER, CO 80225
        <br />A FOLDER DESCRIBING TOPOGRAPHIC MAPS AND SYMBOLS IS AVAILABLE ON REQUEST
        {/* https://www.youtube.com/watch?v=CoVcRxza8nI */}
      </p>
    </MapText>
    <Contact>
      <Inner>
        <ContactText>
          Say{' '}
          <a className="fancy lighten" href="mailto:hello@pycolorado.org">
            Hello
          </a>
          , or find us on{' '}
          <a className="fancy lighten" href="https://twitter.com/pycolorado">
            Twitter
          </a>{' '}
          {' & '}
          <a className="fancy lighten" href="https://slack.pycolorado.org/">
            Slack
          </a>
        </ContactText>
      </Inner>
    </Contact>
  </>
)

export default Footer
