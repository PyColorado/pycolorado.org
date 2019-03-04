import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

// Views
import Contact from './Contact'

// Elements
import Inner from '../elements/Inner'

const ContactText = styled.div`
  ${tw`text-alt-white font-sans text-xl md:mb-4 text-lg lg:text-3xl`};
`

const FooterBottom = styled.footer`
  ${tw`text-left text-alt-white pin-b p-6 font-sans text-md md:p-1 text-xs lg:text-lg`};
`

const Footer = () => (
  <>
    <Contact>
      <Inner>
        <ContactText>Say <a href="mailto:hello@pycolorado.org">Hello</a> or find us on{' '}
          <a href="https://twitter.com/pycolorado">Twitter</a> & <a href="https://slack.pycolorado.com">Slack</a>
        </ContactText>

        <FooterBottom>
          &copy; 2019 PyColorado. Made by <a href="https://cuttlesoft.com">Cuttlesoft</a>
        </FooterBottom>
      </Inner>
    </Contact>
  </>
)

export default Footer
