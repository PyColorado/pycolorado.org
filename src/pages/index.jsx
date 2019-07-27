import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Layout, Wordmark } from '../components'
import { About, Hero, Sponsors, SponsorsWrapper, SponsorCard, ProjectsWrapper, Projects, ProjectCard } from '../views'
import { SectionTitle } from '../elements'
import schedule from '../data/schedule.json'

const HeroTitleWrapper = styled.div`
  ${tw`absolute inset-x-0`};
  bottom: 4.5rem;
`

const HeroTitle = styled.h1`
  ${tw`md:text-5xl text-3xl text-white text-center font-bold leading-none`};

  span {
    ${tw`md:text-3xl text-lg font-normal`};
  }
`

const AboutDesc = styled.p`
  ${tw`text-base text-left md:text-xl lg:text-2xl md:p-8 p-4 font-sans relative bg-white`};
  box-decoration-break: clone;
`

const speakersWithHeadshots = schedule.reduce((acc, currentValue) => {
  if (currentValue.headshot) acc.push(currentValue)
  return acc
}, [])

const featuredSpeakers = speakersWithHeadshots.slice(0, 6)

const Index = ({ location }) => (
  <>
    <Layout position="centered" location={location}>
      <Hero>
        <Wordmark />
        <HeroTitleWrapper>
          <HeroTitle>
            September 6, 7 & 8 <br /> <span>The Studio Loft | Denver, CO</span>
          </HeroTitle>
        </HeroTitleWrapper>
      </Hero>

      <Projects>
        <div style={tw`flex mb-4`}>
          <SectionTitle style={tw`flex-1 w-full`}>Featured Speakers ― </SectionTitle>
        </div>
        <ProjectsWrapper>
          {featuredSpeakers.map(talk => (
            <ProjectCard key={talk.order} title={talk.speaker} img={talk.headshot} bg="" />
          ))}
        </ProjectsWrapper>
      </Projects>

      <Sponsors>
        <div style={tw`flex mb-4`}>
          <SectionTitle color="#fffff6" bg="#1f506e" style={tw`flex-1 w-full`}>
            Sponsored By ―{' '}
          </SectionTitle>
        </div>
      </Sponsors>

      <About>
        <div style={tw`flex mt-16`}>
          <SectionTitle color="#fffff6" bg="rgba(35, 38, 43, 0.95);" style={tw`flex-1 w-full`}>
            About PyCO ―{' '}
          </SectionTitle>
        </div>
        <AboutDesc>
          PyColorado is a regional Python conference to bring together the community of Python users and developers in
          the Front Range region of the Rocky Mountains. Python is a popular open-source programming language with many
          users in this region, including many organizations and companies who rely on the language in their technology
          stack. Despite rapid growth and increasing prominence of the Rocky Mountain region in the technology world it
          has been historically underserved with opportunities for collaboration and education, a problem this
          conference seeks to redress.
          <br />
          <br />
          PyColorado commits to creating a diverse, inclusive, accessible and safe conference. We invite speakers and
          attendees from all over the world to enjoy the superb sights and activities Colorado has to offer while
          mingling with the local Python community. In this way we help bring the community to greater prominence, help
          participants improve their Python skills, and connect technology talent to opportunities in industry and
          interest.
          <br />
          <br />
          Questions? Email us at <a href="mailto:hello@pycolorado.org">hello@pycolorado.org</a>
        </AboutDesc>
      </About>
    </Layout>
  </>
)

export default Index
