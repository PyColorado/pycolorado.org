import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Layout, Wordmark } from '../components'
import { About, Hero, Sponsors, ProjectsWrapper, Projects, ProjectLinks, ProjectCard } from '../views'
import { SectionTitle } from '../elements'


const HeroHeroTitleWrapper = styled.div`
  ${tw`absolute inset-x-0`};
  bottom: 4.5rem;
  @media (min-width: 768px) {
    bottom: 2.5rem;
  }
`

const HeroTitle = styled.h1`
  ${tw`md:text-5xl text-3xl text-white text-center font-bold leading-none`};

  span {
    ${tw`md:text-3xl text-lg font-normal`};
  }
`

const AboutHeroTitle = styled.h1`
  ${tw`md:w-1/2 lg:text-5xl text-3xl my-1 px-8relative inline-block bg-white`};
  box-decoration-break: clone;
`

const AboutDesc = styled.p`
  ${tw`text-lg md:text-xl lg:text-2xl p-8 relative bg-white`};
  box-decoration-break: clone;
`

const Index = ({ location }) => (
  <>
    <Layout position="centered" location={location}>
      <Hero>
        <Wordmark />
        <HeroHeroTitleWrapper>
          <HeroTitle>September 6, 7 & 8 <br /> <span>The Studio Loft | Denver, CO</span></HeroTitle>
        </HeroHeroTitleWrapper>
      </Hero>

      <Projects>
        <div style={tw`flex mb-4`}>
          <SectionTitle style={tw`flex-1 w-full`}>Featured Speakers ― </SectionTitle>
        </div>
        <ProjectsWrapper>
          

          <ProjectCard title="Sponsor" link="" bg="white">
            <ProjectLinks></ProjectLinks>
          </ProjectCard>

          <ProjectCard title="Attend" link="" bg="white">
            <ProjectLinks></ProjectLinks>
          </ProjectCard>

          <ProjectCard title="Volunteer" link="" bg="white">
            <ProjectLinks></ProjectLinks>
          </ProjectCard>

          <ProjectCard title="Volunteer" link="" bg="white">
            <ProjectLinks></ProjectLinks>
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>

      <Sponsors />

      <About>
        <AboutHeroTitle>About PyColorado</AboutHeroTitle>
        <AboutDesc>
          PyColorado is a regional Python conference to bring together the community of Python users and developers in the
          Front Range region of the Rocky Mountains. Python is a popular open-source programming language with many users
          in this region, including many organizations and companies who rely on the language in their technology stack.
          Despite rapid growth and increasing prominence of the Rocky Mountain region in the technology world it has been
          historically underserved with opportunities for collaboration and education, a problem this conference seeks to
          redress.
          <br />
          <br />
          PyColorado commits to creating a diverse, inclusive, accessible and safe conference. We invite speakers and
          attendees from all over the world to enjoy the superb sights and activities Colorado has to offer while mingling
          with the local Python community. In this way we help bring the community to greater prominence, help
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
