import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

// Components
import Layout from '../components/Layout'

// Elements
import Inner from '../elements/Inner'
import { Title, Subtitle } from '../elements/Titles'

// Views
import Contact from '../views/Contact'

const ContactText = styled.p`
  ${tw`text-alt-white font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Content = styled.div`
  ${tw`flex flex-wrap justify-between mt-16`};
`

const Footer = styled.footer`
  ${tw`text-center text-alt-white pin-b p-6 font-sans text-md lg:text-lg`};
`

const Coc = () => (
  <>
    <Layout />
    <Content />
    <Contact>
      <Inner>
        <ContactText>
          Say <a href="mailto:hello@pycolorado.org">Hello</a> or find us on{' '}
          <a href="https://twiiter.com/pycolorado">Twitter</a> & <a href="https://pycolorado.slack.com">Slack</a>
        </ContactText>
      </Inner>
      <Footer>
        &copy; 2019 PyColorado. Made by <a href="https://cuttlesoft.com">Cuttlesoft</a>
      </Footer>
    </Contact>
  </>
)

export default Coc
