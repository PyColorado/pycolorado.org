import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { DividerMiddle } from '../elements/Dividers'
import { Content } from '../elements'
import TopoBlueBG from '../images/topo-blue.svg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap -mx-1`};
`

const ProjectLinks = styled.h5`
  ${tw`mt-8 tracking-wide`};
  a:not(:last-child) {
    margin-right: 20px;
  }
`

const Wrapper = styled.div`
  ${tw`my-1 p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/3 z-50`};
  background: ${props => props.bg} center center;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: translateY(-1px);
    transition: all 250ms ease-in;

    div.__image {
      filter: grayscale(0%);
      background-size: 100%;
    }
  }
`

const Image = styled.div`
  ${tw`w-full h-64`};
  background-image:url('${props => props.bg}');
  background-repeat:no-repeat;
  background-size: 105%;
  background-position: center center;
  filter: grayscale(100%);
  transition: all 250ms ease-in;
`

const Inner = styled.div`
  ${tw`xl:w-4/5 w-full text-center lg:text-left mt-8 mb-8`};
  background: ${props => props.bg};
`

const Title = styled.div`
  ${tw`text-blue-900 text-lg md:text-2xl mt-8 tracking-wide font-serif`};
  font-weight: 600;
`

const Projects = ({ children }) => (
  <>
    <DividerMiddle style={tw`z-10`} bg={`#fffff6 url(${TopoBlueBG}); background-size: cover;`} />
    <Content height="auto">
      <Inner>{children}</Inner>
    </Content>
  </>
)

const ProjectCard = ({ title, link, img, bg }) => (
  <Wrapper bg={bg}>
    <div
      style={tw`bg-white p-4 cursor-pointer`}
      onClick={() => {
        window.open(link, '_blank')
      }}
    >
      <Image className="__image" bg={`/headshots/${img}`} />
      <Title>{title}</Title>
    </div>
  </Wrapper>
)

export { ProjectsWrapper, ProjectLinks, Projects, ProjectCard }

Projects.propTypes = {
  children: PropTypes.node.isRequired,
  // offset: PropTypes.number.isRequired,
}
