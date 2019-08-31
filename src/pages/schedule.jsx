import React, { Component } from 'react'
import styled, { keyframes, css } from 'styled-components'
import tw from 'tailwind.macro'
import { FiTwitter as TwitterIcon, FiLinkedin as LinkedInIcon, FiCalendar as CalendarIcon } from 'react-icons/fi'
import { Layout } from '../components'
import TopoBlueBG from '../images/topo-blue.svg'
import { DividerTop, PageTitle, PageContent, Section } from '../elements'
import schedule from '../data/schedule.json'

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate(0, 1rem);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`

const fadeInUpAnimation = css`
  ${fadeInUp} 200ms ease-in forwards;
`

const Wrapper = styled.div`
  ${tw`flex flex-row justify-start relative no-underline pb-8`};
  animation: ${fadeInUpAnimation};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:not(:first-child) {
    ${tw`pt-16`}
  }
  &:not(:last-child) {
    ${tw`border-b border-solid border-gray-300`}
  }
  &:hover {
  }
`

const Time = styled.div`
  ${tw`w-1/6 text-blue-900 text-xl md:text-2xl font-serif font-bold`};

  span {
    ${tw`text-base font-bold`}
  }
`

const Title = styled.div`
  ${tw`text-blue-900 text-xl md:text-2xl font-serif font-bold py-6`};
`

const Speaker = styled.span`
  ${tw`text-gray-900 text-lg font-sans`};
`

const Text = styled.div`
  ${tw`lg:w-10/12 w-full text-gray-700 font-sans text-xl leading-normal mb-8`};
`

const TicketLink = styled.a`
  ${tw`text-blue-600 hover:text-blue-500 uppercase text-base text-center font-bold float-right md:w-auto w-full md:my-0 my-8`};
`

const Twitter = ({ handle }) => {
  const url = `https://twitter.com/${handle}`
  const alt = `${handle} on Twitter`

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" title={alt} style={tw`ml-3 rounded hover:bg-gray-300`}>
      <TwitterIcon size="0.75em" />
    </a>
  )
}

const LinkedIn = ({ speaker, url }) => {
  const alt = `${speaker} on LinkedIn`

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" title={alt} style={tw`ml-3 rounded hover:bg-gray-300`}>
      <LinkedInIcon size="0.75em" />
    </a>
  )
}

const TalkCard = ({ type, time, title, location, children, bg }) => (
    <Wrapper>
      <Time>{time.split(' ')[0]} <span>{time.split(' ')[1]}</span></Time>
      <div style={tw`w-5/6 text-lg align-text-bottom`}>
        <div>
          {type && `${type} | `}
          <a href={location.link} target="_blank">
            {location.name}
          </a>
        </div>
        <Title>{title}</Title>
        <Text>{children}</Text>
      </div>
    </Wrapper>
  )

const CalendarLink = () => (
  <a
    href="https://calendar.google.com/calendar/ical/pycolorado.org_c5bkg31mfpnrpf1q71ph13m2b8%40group.calendar.google.com/public/basic.ics"
    title="Download full schedule as iCal (importable to Google Calendar)"
  >
    <CalendarIcon style={tw`ml-3 align-text-top`} />
  </a>
)

const ScheduleDays = styled.div`
  ${tw`flex flex-row -mx-16 px-16 border-b border-solid border-gray-300`};
`

const ScheduleDay = styled.div`
  ${tw`text-gray-700 text-center px-6 py-4 mr-4 cursor-pointer`};
  transition: all 0.2s ease;
  &.active,
  &:hover {
    ${tw`font-semibold border-b-2 border-solid border-blue-600`};
  }
`

class Schedule extends Component {
  state = {
    currentDay: 'Friday',
    days: [
      {
        day: 'Friday',
        label: '6 Fri',
      },
      {
        day: 'Saturday',
        label: '7 Sat',
      },
      {
        day: 'Sunday',
        label: '8 Sun',
      },
    ],
  }

  render() {
    const { location } = this.props
    const { currentDay, days } = this.state

    return (
      <>
        <Layout showLogo theme="lighten" location={location}>
          <DividerTop bg={`#fffff6 url(${TopoBlueBG}); background-size: cover;`} />
          <PageContent height="auto">
            <Section bg="white">
              <PageTitle title="Schedule" showScale={false} />

              <ScheduleDays>
                {days.map(day => (
                  <ScheduleDay
                    className={currentDay === day.day ? 'active' : ''}
                    style={tw`w-32`}
                    onClick={() => this.setState({ currentDay: day.day })}
                  >
                    {day.label}
                  </ScheduleDay>
                ))}
              </ScheduleDays>

              {schedule
                .filter(talk => talk.day === currentDay)
                .map(talk => (
                  // eslint-disable-next-line react/no-array-index-key
                  <TalkCard
                    key={`${talk.title}-${currentDay}-${talk.time}`}
                    type={talk.type}
                    time={talk.time}
                    title={talk.title}
                    location={talk.location}
                    link=""
                  >
                    {talk.blurb && <div dangerouslySetInnerHTML={{ __html: talk.blurb }} />}

                    <div style={tw`my-6`}>
                      <Speaker>{talk.speaker}</Speaker>
                      {talk.twitter && <Twitter handle={talk.twitter} />}
                      {talk.linkedin_profile && <LinkedIn speaker={talk.speaker} url={talk.linkedin_profile} />}
                      {talk.tickets && (
                        <TicketLink href={talk.tickets} target="_blank">
                          {talk.ticket_caption || 'Buy Tickets'}
                        </TicketLink>
                      )}
                    </div>
                  </TalkCard>
                ))}
            </Section>
          </PageContent>
        </Layout>
      </>
    )
  }
}

export default Schedule
