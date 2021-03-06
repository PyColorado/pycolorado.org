import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Contact from './Contact'
import { Pendant } from '../components'

const Inner = styled.div`
  ${tw`w-full xl:w-3/4 text-center lg:text-left mt-24 mb-8`};
`

const PendantWrapper = styled.div`
  ${tw`mx-auto md:w-1/5 w-1/2 md:mt-12 mt-64 opacity-25`};
`

const ContactText = styled.div`
  ${tw`text-white text-center font-sans md:mb-4 md:text-4xl text-3xl leading-relaxed`};
`

const MapText = styled.div`
  ${tw`text-center text-alt-white mt-8 p-2 font-mono md:text-sm text-xs text-blue-100 opacity-25 md:block hidden`};

  > h2 {
    ${tw`font-mono text-alt-white text-xl font-bold text-blue-100`}
  }

  p:first-of-type {
    ${tw`-mt-8`}
  }
`

const Footer = () => (
  <div style={tw`md:mt-8 mt-64`}>
    <PendantWrapper>
      <Pendant />
    </PendantWrapper>

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
          , find us on{' '}
          <a className="fancy lighten" href="https://twitter.com/pycolorado">
            Twitter
          </a>{' '}
          {' & '}
          <a className="fancy lighten" href="https://slack.pycolorado.org/">
            Slack
          </a>
          {','}
          <br />
          or{' '}
          <a className="fancy lighten" href="http://eepurl.com/goFWWL">
            join our mailing list
          </a>{' '}
          for occasional updates.
        </ContactText>
      </Inner>
    </Contact>
  </div>
)

export default Footer
