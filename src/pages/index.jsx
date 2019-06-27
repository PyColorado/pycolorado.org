import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Layout, NavBar, Wordmark } from '../components'
import { About, Hero, Sponsors, ProjectsWrapper, Projects, ProjectLinks, ProjectCard } from '../views'
import { Subtitle } from '../elements'

const AboutTitle = styled.h1`
  ${tw`w-3/4 text-5xl my-1 px-8 tracking-wide relative inline-block text-center`};
  background: #ffffff;
  box-decoration-break: clone;
`

const AboutDesc = styled.p`
  ${tw`text-lg md:text-xl lg:text-2xl p-8 relative bg-white`};
  box-decoration-break: clone;
`

const Index = ({ location }) => (
  <>
    <Layout>
      <NavBar centered theme="dark" location={location} />
      <Hero>
        <Wordmark />
        <Subtitle>September 7 - 8, 2019 &nbsp;</Subtitle>
      </Hero>

      <Sponsors />

      <Projects>
        <ProjectsWrapper>
          <ProjectCard title="Sponsor" link="" bg="white">
            PyColorado is a community driven event made possible by the generosity of our sponsors! There are a few
            sponsor levels remaining. If you, or your company are interested in supporting conferences like PyColorado,
            please get in touch with us today!
            <ProjectLinks>
              <a className="fancy" href="/PyColorado_2019_-_Sponsorship_Prospectus.pdf" target="_blank">Sponsorship Prospectus</a>
            </ProjectLinks>
          </ProjectCard>

          <ProjectCard title="Attend" link="" bg="white">
            Ready to start your journey to PyColorado? Well, grab your trekking poles, fill your Nalgenes, and lace up
            your boots! This year's venue is the <a className="fancy" href="http://www.artscomplex.com/venues/detail/studio-loft" target="_blank">Studio Loft</a>,
            conveniently located in the heart of downtown Denver.
            <ProjectLinks>
              <a className="fancy" href="https://ti.to/pycolorado/pycolorado-2019" target="_blank">Purchase Tickets</a>
            </ProjectLinks>
          </ProjectCard>

          <ProjectCard title="Volunteer" link="" bg="white">
            Community driven conferences, such as PyColorado are only succesful thanks to an army of volunteers.
            Interested in helping? Just fill out the form after the jump!
            <ProjectLinks>
              <a className="fancy" href="https://pycolorado.typeform.com/to/hzgBVt" target="_blank">Volunteer Registration</a>
            </ProjectLinks>
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>

      <About>
        <AboutTitle>About PyColorado</AboutTitle>
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
