import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Layout } from '../components'
import TopoBlueBG from '../images/topo-blue.svg'
import { PageTitle, DividerTop, PageContent, Section } from '../elements'
import travel from '../data/travel.json'

const Paragraph = styled.div`
  ${tw`leading-tight mb-6`};
`

const TravelSection = function(props, context) {
  const { name, paragraphs } = props

  return (
    <div key={name}>
      <h2>{name}</h2>
      {paragraphs.map(paragraph => (
        <Paragraph dangerouslySetInnerHTML={{ __html: paragraph }} />
      ))}
    </div>
  )
}

TravelSection.propTypes = {
  name: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const Travel = function(props, context) {
  const { location } = props

  return (
    <>
      <Layout showLogo theme="lighten" location={location}>
        <DividerTop bg={`#fffff6 url(${TopoBlueBG}); background-size: cover;`} />
        <PageContent height="auto">
          <Section bg="white">
            <PageTitle title="Getting to PyColorado" />
            {travel.map(section => (
              <TravelSection name={section.name} paragraphs={section.description} />
            ))}
          </Section>
        </PageContent>
      </Layout>
    </>
  )
}

Travel.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Travel
