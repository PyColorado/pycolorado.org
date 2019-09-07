import React, { Component } from 'react'
import styled, { keyframes, css } from 'styled-components'
import tw from 'tailwind.macro'
import { FiTwitter as TwitterIcon, FiLinkedin as LinkedInIcon, FiCalendar as CalendarIcon } from 'react-icons/fi'

// Loaded as null when using server-side rendering
import PrintProvider, { Print, NoPrint } from 'react-easy-print'

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
  ${tw`flex md:flex-row flex-col justify-start relative pb-8`};
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
  ${tw`md:w-1/6 w-full text-blue-900 text-2xl font-serif font-bold md:pb-0 pb-16`};

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
    <Time>
      {time.split(' ')[0]} <span>{time.split(' ')[1]}</span>
    </Time>
    <div style={tw`w-5/6 text-lg align-text-bottom`}>
      <div>
        {type}
        {type && location !== undefined && ` | `}
        {location !== undefined && (
          <a href={location.link} target="_blank">
            {location.name}
          </a>
        )}
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
  ${tw`flex flex-row md:-mx-16 md:px-16 px-2 md:text-xl text-base bg-white border-b border-solid border-gray-300 z-10`};

  &.fixed-nav {
    position: fixed;
    top: 0;
    ${tw`shadow-sm lg:w-3/4 w-11/12 md:-mx-16 -mx-0 -ml-4`}
  }
`

const ScheduleDay = styled.div`
  ${tw`text-gray-700 text-center md:px-6 px-4 py-4 mr-4 cursor-pointer`};
  transition: all 0.2s ease;
  &.active,
  &:hover {
    ${tw`font-semibold border-b-2 border-solid border-blue-600`};
  }
`

const ScheduleTable = styled.table`
  ${tw`text-base text-left border-collapse text-sm`}

  th, td {
    padding: 15px;
    text-align: left;
  }
`

const PrintedSchedule = ({ schedule }) => (
  <ScheduleTable>
    <thead style={tw`border-b border-solid border-gray-200`}>
      <tr>
        <th style={tw`w-1/8`}>Day</th>
        <th style={tw`w-1/8`}>Time</th>
        <th style={tw`w-3/4`}>Event</th>
      </tr>
    </thead>
    <tbody>
      {schedule.map(talk => (
        <tr style={tw`h-4`}>
          <td>{talk.day}</td>
          <td>{talk.time}</td>
          <td>
            {/* <div style={tw`text-sm`}>{talk.type}</div> */}
            <div style={tw`font-bold`}>{talk.title}</div>
            <div style={tw`text-sm`}>{talk.blurb}</div>
            <div style={tw`text-sm font-bold`}>
              <br />
              {talk.speaker}
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </ScheduleTable>
)

class Schedule extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentDay: 'Saturday',
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
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    const el = document.querySelector('.tabs')
    const section = document.querySelector('.content-section')
    this.setState({ top: el.offsetTop - 2, contentBottom: section.offsetHeight })
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    this.setState({ scroll: window.scrollY })
  }

  handleUpdateCurrentDay(day) {
    const section = document.querySelector('.content-section')

    this.setState({ currentDay: day })

    setTimeout(() => {
      this.setState({ contentBottom: section.clientHeight })
    }, 20)
  }

  render() {
    // If we don't have a document, we're pre-rendering on the server and should
    // skip rendering anything
    if (typeof document !== 'object') {
      return (<></>)
    }

    const tabs = document.querySelector('.tabs')

    const { location } = this.props
    const { scroll, top, contentBottom, currentDay, days } = this.state

    const hasScrolled = scroll !== undefined && contentBottom !== undefined
    const isBelowSchedule = scroll < contentBottom
    const isBelowDaySelection = scroll > top

    return (
      <>
        <PrintProvider>
          <Print printOnly name="printed-schedule">
            <PrintedSchedule schedule={schedule} />
          </Print>
          <NoPrint force>
            <Layout showLogo theme="lighten" location={location}>
              <DividerTop bg={`#fffff6 url(${TopoBlueBG}); background-size: cover;`} />
              <PageContent height="auto">
                <Section className="content-section" bg="white">
                  <PageTitle title="Schedule" showScale={false} />

                  {(!hasScrolled || isBelowSchedule) && (
                    <ScheduleDays className={isBelowDaySelection ? 'tabs fixed-nav' : 'tabs '}>
                      {days.map(day => (
                        <ScheduleDay
                          key={day.day}
                          className={currentDay === day.day ? 'active' : ''}
                          style={tw`w-32`}
                          onClick={() => this.handleUpdateCurrentDay(day.day)}
                        >
                          {day.label}
                        </ScheduleDay>
                      ))}
                    </ScheduleDays>
                  )}

                  {/* Placeholder to maintain height when ScheduleDays is fixed */}
                  {isBelowDaySelection && <div style={{ height: (tabs && tabs.offsetHeight) || 0 }} />}

                  {schedule
                    .filter(talk => talk.day === currentDay)
                    .map(talk => (
                      <TalkCard
                        key={`${talk.title}-${currentDay}-${talk.time}`}
                        type={talk.type}
                        time={talk.time}
                        title={talk.title}
                        location={talk.location}
                      >
                        {talk.blurb && <div dangerouslySetInnerHTML={{ __html: talk.blurb }} />}

                        <div style={tw`my-6`}>
                          <Speaker>{talk.speaker}</Speaker>
                          {talk.twitter && <Twitter handle={talk.twitter} />}
                          {talk.linkedin_profile && <LinkedIn speaker={talk.speaker} url={talk.linkedin_profile} />}
                          {talk.tickets && (
                            <TicketLink href={talk.tickets} target="_blank">
                              {talk.ticket_caption || 'Purchase Ticket'}
                            </TicketLink>
                          )}
                        </div>
                      </TalkCard>
                    ))}
                </Section>
              </PageContent>
            </Layout>
          </NoPrint>
        </PrintProvider>
      </>
    )
  }
}

export default Schedule
