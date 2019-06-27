import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { DividerMiddle } from '../elements/Dividers'
import { Content } from '../elements'
import Inner from '../elements/Inner'
import TopoBlueBG from '../images/topo-blue.svg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between`};
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

const ProjectLinks = styled.h5`
  ${tw`mt-8 tracking-wide`};
  a:not(:last-child) {
    margin-right: 20px;
  }
`

const Wrapper = styled.div`
  ${tw`relative no-underline p-8 text-white`};
  background: ${props => props.bg};
  border: solid 5px #1f506e;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    ${tw`shadow-lg`};
    transform: translateY(-1px);
    transition: all 250ms ease-in;
  }

  a {
    color: #1f506e;
    border-bottom: 2px dotted #1f506e;
    font-weight: 700;
  }

  a:hover {
    border-bottom: 2px dotted transparent;
  }

  a:before {
    background-color: #1f506e;
  }
`

const Title = styled.div`
  ${tw`text-blue-900 uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-serif mb-6`};
  font-weight: 600;
`

const Text = styled.div`
  ${tw`text-black font-sans text-lg leading-normal`};
`

const Projects = ({ children }) => (
  <>
    <DividerMiddle bg={`#fffff6 url(${TopoBlueBG}); background-size: cover;`} />
    <Content height="auto">
      <Inner>{children}</Inner>
    </Content>
  </>
)

const ProjectCard = ({ title, link, children, bg }) => (
  <Wrapper bg={bg}>
    <Title>{title}</Title>
    <Text>{children}</Text>
  </Wrapper>
)

export { ProjectsWrapper, ProjectLinks, Projects, ProjectCard }

Projects.propTypes = {
  children: PropTypes.node.isRequired,
  // offset: PropTypes.number.isRequired,
}
