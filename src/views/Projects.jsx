import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { DividerMiddle } from '../elements/Dividers'
import { Content } from '../elements'
import TopoBlueBG from '../images/topo-blue.svg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-center -mx-32`};
`

const ProjectLinks = styled.h5`
  ${tw`mt-8 tracking-wide`};
  a:not(:last-child) {
    margin-right: 20px;
  }
`

const Wrapper = styled.div`
  ${tw`w-1/4 shadow-lg m-4 p-8 z-50`};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:hover {
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

const Inner = styled.div`
  ${tw`w-full xl:w-4/5 text-center lg:text-left mt-8 mb-8`};
  background: ${props => props.bg};
`

const Title = styled.div`
  ${tw`text-blue-900 text-lg md:text-2xl tracking-wide font-serif mb-6`};
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
