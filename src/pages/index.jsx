import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import Wordmark from '../components/Logo'

// Elements
import Inner from '../elements/Inner'
import { Title, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(1, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 1rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey pin-b p-6 font-sans text-md lg:text-lg`};
`

const Clearfix = styled.div`
  height: 40vh;
`

const Index = () => (
  <>
    <Layout />
    <Hero>
      <Wordmark />
      <Subtitle>Septemeber 7 - 8, 2019</Subtitle>
    </Hero>

    <Projects>
      <Title>2019 — Denver</Title>
      <ProjectsWrapper>
        <ProjectCard title="Sponsorships" link="" bg="white">
          This project is my entry to Adobe's #ChallengeYourPerspective contest.
        </ProjectCard>
        <ProjectCard title="Speak at PyColorado" link="" bg="white">
          Our Call for Proposals is open from March 4 through May 9th. We're excepting proposals for Talks, Tutorial
          Workshops, and Lightning Talks!
        </ProjectCard>
        <ProjectCard title="Buy Tickets" link="" bg="white">
          Recreation of a Tomb Raider Wallpaper (Fan Art)
        </ProjectCard>
      </ProjectsWrapper>
    </Projects>

    <About>
      <Title>About</Title>
      <AboutHero>
        <AboutSub>
          The English language can not fully capture the depth and complexity of my thoughts. So I'm incorporating Emoji
          into my speech to better express myself. Winky face.
        </AboutSub>
      </AboutHero>
      <AboutDesc>
        You know the way you feel when you see a picture of two otters holding hands? That's how you're gonna feel day.
        My mother cried the day I was born because she knew she’d never be prettier than me. You should make me your
        campaign manager. I was born for politics. I have great hair and I love lying. Captain? The kids want to where
        Paulie the Pigeon is. I told them he got sucked up into an airplane engine, is that all right?
      </AboutDesc>
    </About>

    <Contact>
      <Inner>
        <Title>Get in touch</Title>
        <ContactText>
          Say <a href="mailto:hello@pycolorado.org">Hello</a> or find us on {' '}
          <a href="https://twiiter.com/pycolorado">Twitter</a> &{' '}
          <a href="https://pycolorado.slack.com">Slack</a>
        </ContactText>
      </Inner>
      <Footer>
        &copy; 2019 PyColorado. Made by <a href="https://cuttlesoft.com">Cuttlesoft</a>.
      </Footer>
    </Contact>
  </>
)

export default Index
