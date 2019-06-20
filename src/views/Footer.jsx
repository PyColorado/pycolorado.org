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

const Link = styled.a`
  color: #EDEDED;
  text-decoration: none;
  position: relative;
  width: 100%
  border-bottom: 2px dotted #EDEDED;
  transition-timing-function: ease;
  transition-duration: 200ms;

  &:hover {
    border-bottom: 2px dotted transparent;
  }

  &:before {
    content: "";
    background-color: #EDEDED;
    visibility: hidden;
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: 0;
    transition: all 0.3s ease-in-out 0s;
    transform: scaleX(0);
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`

const Footer = () => (
  <>
    <Contact>
      <Inner>
        <ContactText>
          Say <Link href="mailto:hello@pycolorado.org">Hello</Link>, or find us on{' '}
          <Link href="https://twitter.com/pycolorado">Twitter</Link> {' & '}
          <Link href="https://slack.pycolorado.org/">Slack</Link>
        </ContactText>
      </Inner>
    </Contact>
  </>
)

export default Footer
