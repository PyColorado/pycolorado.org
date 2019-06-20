import React from 'react'
import PropTypes from 'prop-types'
import { DividerMiddle } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import TopoBlueBG from '../images/topo-blue.svg'

const Projects = ({ children }) => (
  <>
    <DividerMiddle bg={`#fffff6 url(${TopoBlueBG}); background-size: cover;`} />
    <Content height="auto">
      <Inner>{children}</Inner>
    </Content>
  </>
)

export default Projects

Projects.propTypes = {
  children: PropTypes.node.isRequired,
  // offset: PropTypes.number.isRequired,
}
