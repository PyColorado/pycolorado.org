import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import {
  FiTwitter as TwitterIcon,
  FiLinkedin as LinkedInIcon,
  FiShare as ShareIcon,
  FiCalendar as CalendarIcon,
} from 'react-icons/fi'
import { Layout } from '../components'
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

const Speaker = styled.a`
  ${tw`text-black font-sans font-bold text-2xl mt-4 mb-0`};
`

const Text = styled.div`
  ${tw`text-black font-sans text-xl p-6 leading-normal`};
`

const TicketLink = styled.a`
  ${tw`bg-blue-600 hover:bg-blue-500 uppercase text-center text-white font-bold py-2 px-4 rounded float-right md:w-auto w-full md:my-0 my-8`};
`

const Twitter = ({ handle }) => {
  const url = `https://twitter.com/${handle}`
  const alt = `${handle} on Twitter`

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" title={alt}>
      <TwitterIcon size="1.5rem" style={tw`ml-3 align-text-top`} />
    </a>
  )
}

const LinkedIn = ({ speaker, url }) => {
  const alt = `${speaker} on LinkedIn`

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" title={alt}>
      <LinkedInIcon size="1.5rem" style={tw`ml-3 align-text-top`} />
    </a>
  )
}

const Shareable = ({ speaker }) => {
  const lastName = speaker.split(' ').slice(-1)[0]
  const url = `/shareables/${lastName.toLowerCase()}_shareable.jpg`
  const alt = `Shareable Talk Image`

  return (
    <a href={url} title={alt}>
      <ShareIcon size="1.5rem" style={tw`ml-3 align-text-top`} />
    </a>
  )
}

const TalkCard = ({ type, title, children, bg }) => {
  const formatted_title = type !== 'Regular Talk' ? type + ': ' + title : title

  return (
    <Wrapper>
      <Title>{formatted_title}</Title>
      <Text>{children}</Text>
    </Wrapper>
  )
}

const CalendarLink = () => (
  <a
    href="https://calendar.google.com/calendar/ical/pycolorado.org_c5bkg31mfpnrpf1q71ph13m2b8%40group.calendar.google.com/public/basic.ics"
    title="Download full schedule as iCal (importable to Google Calendar)"
  >
    <CalendarIcon style={tw`ml-3 align-text-top`} />
  </a>
)

const Schedule = ({ location }) => (
  <>
    <Layout showLogo theme="lighten" location={location}>
      <DividerTop bg={`#fffff6 url(${TopoBlueBG}); background-size: cover;`} />
      <PageContent height="auto">
        <Section bg="white">
          <PageTitle title="Schedule" />

          <SectionTitle>Scheduled Talks</SectionTitle>
          <SectionSubTitle>
            September 7 - 8 | Sat, Sun 8:00 AM - 6 PM MDT <CalendarLink />
          </SectionSubTitle>
          <p>Enjoy talks covering Python Fundamentals, Web, Data Science, DevOps, People, and lots more.</p>
          <br />
          {schedule.map(talk => (
            <TalkCard key={talk.order} type={talk.type} title={talk.title} link="">
              <strong>
                {talk.day} : {talk.time}
              </strong>
              {talk.tickets && (
                <TicketLink href={talk.tickets} target="_blank">
                  Buy Tickets
                </TicketLink>
              )}
              <br />
              <br />
              {talk.blurb}
              <br />
              <br />
              <Speaker>{talk.speaker}</Speaker>
              {talk.twitter && <Twitter handle={talk.twitter} />}
              {talk.linkedin_profile && <LinkedIn speaker={talk.speaker} url={talk.linkedin_profile} />}
              <Shareable speaker={talk.speaker} />
            </TalkCard>
          ))}

          {/* <SectionTitle>Keynotes</SectionTitle>
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
          )} */}
        </Section>
      </PageContent>
    </Layout>
  </>
)

export default Schedule
