import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Layout, NavBar } from '../components'
import TopoBlueBG from '../images/topo-blue.svg'
import { DividerTop, PageTitle, PageContent, Section } from '../elements'
import schedule from '../data/schedule.json'

const Wrapper = styled.div`
  ${tw`relative no-underline mb-8 text-white`};
  background: white;
  border: solid 5px #1f506e;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    ${tw`shadow-lg`};
    transform: translateY(-1px);
    transition: all 250ms ease-in;
  }
`

const SectionTitle = styled.h1`
  ${tw`text-black text-2xl md:text-3xl font-serif font-bold`};
  margin-bottom: -2.5rem !important;
`

const SectionSubTitle = styled.h3`
  ${tw`text-black text-xl md:text-2xl font-serif font-bold -mt-2`};
  margin-bottom: -0.5rem !important;
`

const Title = styled.div`
  ${tw`text-white text-xl md:text-2xl font-serif font-bold mb-4 p-6`};
  background: #1f506e;
`

const Speaker = styled.h3`
  ${tw`text-black font-sans text-2xl mt-4 mb-0`};
`

const Text = styled.div`
  ${tw`text-black font-sans text-xl p-6 leading-normal`};
`

const TalkCard = ({ title, children, bg }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Text>{children}</Text>
  </Wrapper>
)

const shouldDisplayTalk = talk =>
  talk.talk_format === 'Talk (~30-45 minutes)' && talk.state === 'accepted' && talk.confirmed

const shouldDisplayKeynote = keynote =>
  keynote.talk_format === 'Keynote' && keynote.state === 'accepted' && keynote.confirmed

const Schedule = ({ location }) => (
  <>
    <Layout>
      <NavBar showLogo theme="lighten" location={location} />
      <DividerTop bg={`#fffff6 url(${TopoBlueBG}); background-size: cover;`} />
      <PageContent height="auto">
        <Section bg="white">
          <PageTitle title="Schedule" />

          <SectionTitle>Scheduled Talks</SectionTitle>
          <SectionSubTitle>September 7 - 8 | Sat, Sun 8:00 AM - 6 PM MDT</SectionSubTitle>
          <p>
            Enjoy talks covering Python Fundamentals, Web, Data Science, DevOps, People, and lots more. A detailed
            schedule will be updated soon!
          </p>
          <br />
          {schedule.map(
            talk =>
              shouldDisplayTalk(talk) && (
                <TalkCard key={talk.title} title={talk.title} link="">
                  {talk.abstract}
                  <Speaker>{talk.name}</Speaker>
                </TalkCard>
              )
          )}

          <SectionTitle>Keynotes</SectionTitle>
          <SectionSubTitle />
          <p />
          {schedule.map(
            keynote =>
              shouldDisplayKeynote(keynote) && (
                <TalkCard key={keynote.title} title={keynote.title} link="">
                  {keynote.abstract}
                  <Speaker>{keynote.name}</Speaker>
                </TalkCard>
              )
          )}
        </Section>
      </PageContent>
    </Layout>
  </>
)

export default Schedule
