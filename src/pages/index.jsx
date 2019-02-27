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
import { Divider } from '../elements/Dividers';

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-16`};
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

const ProjectLinks = styled.div`
  ${tw`mt-8 tracking-wide`};
  a:not(:last-child) {
    margin-right: 20px;
  }
`

const AboutDesc = styled.p`
  ${tw`text-brand-blue font-sans text-lg md:text-xl lg:text-2xl pt-6 relative`};
  padding: 1rem 1rem;
  background: #fffff6;
  box-decoration-break: clone;

  a {
    color: #1f506e;
    border-bottom: 2px dotted #1f506e;
  }

  a:hover {
    border-bottom: 2px dotted transparent;
  }

  a:before {
    background-color: #1f506e;
  }
`

const AboutTitle = styled.h1`
  ${tw`text-5xl lg:text-5xl font-serif text-brand-blue mt-16 mb-8 tracking-wide relative inline-block`};
  text-transform: uppercase;
  padding: 0rem 1rem;
  background: #fffff6;
  box-decoration-break: clone;
`

const ContactText = styled.p`
  ${tw`text-alt-white font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-alt-white pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Hero>
      <Wordmark />
      <Subtitle>Septemeber 7 - 8, 2019 &nbsp;</Subtitle>
    </Hero>

    <Projects>
      <ProjectsWrapper>
        <ProjectCard title="Sponsorships" link="" bg="white">
          PyColorado is a community driven event made possible by the generosity of our sponsors! There are a few
          sponsor levels remaining. If you, or your company are interested in supporting conferences like PyColorado,
          please get in touch with us today!
          <ProjectLinks>
            <a href="#">Corporate Sponsorship Prospectus (PDF)</a>{' '}
            <a href="#">Community Sponsorship Prospectus (PDF)</a>
          </ProjectLinks>
        </ProjectCard>

        <ProjectCard title="Buy Tickets" link="" bg="white">
          Ready to start your journey to PyColorado? Well, grab your trekking poles, fill your Nalgenes, and lace up
          your boots!
        </ProjectCard>

        <ProjectCard title="Speak at PyColorado" link="" bg="white">
          Our Call for Proposals is open from March 4 through May 9th. We're excepting submissions for Talks, Tutorial
          Workshops, and Lightning Talks!
          <ProjectLinks>
            <a href="https://www.papercall.io/pycolorado">Submit via our CFP</a>
          </ProjectLinks>
        </ProjectCard>

        <ProjectCard title="Volunteer at PyColorado" link="" bg="white">
          Community driven conferences, such as PyColorado are only succesful thanks to an army of volunteers.
          Interested in helping? Just fill out the form after the jump!
          <ProjectLinks>
            <a href="#">Volunteer Application</a>
          </ProjectLinks>
        </ProjectCard>
      </ProjectsWrapper>
    </Projects>

    <About>
      <AboutTitle>About PyColorado</AboutTitle>
      <AboutDesc>
        PyColorado is a regional Python conference to bring together the community of Python users and developers in the
        Front Range region of the Rocky Mountains.. Python is a popular open-source programming language with many users
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
        Questions? Say Hello: <a href="mailto:hello@pycolorado.org">hello@pycolorado.org</a>
      </AboutDesc>
    </About>

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

export default Index
