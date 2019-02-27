import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Wrapper = styled.div`
  ${tw`relative no-underline px-8 py-4 md:py-24 text-white`};
  background: ${props => props.bg};
  border: solid 5px #fffff6;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    ${tw`shadow-lg`};
    border: solid 5px #1f506e;
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
  ${tw`text-brand-blue uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-serif`};
  font-weight: 600;
`

const Text = styled.div`
  ${tw`text-brand-blue font-sans text-lg`};
`

const ProjectCard = ({ title, link, children, bg }) => (
  <Wrapper bg={bg}>
    <Title>{title}</Title>
    <Text>{children}</Text>
  </Wrapper>
)

export default ProjectCard

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
}
