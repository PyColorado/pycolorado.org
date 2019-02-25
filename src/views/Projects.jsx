import React from 'react'
import PropTypes from 'prop-types'
import { DividerMiddle } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'

const Projects = ({ children }) => (
  <>
    <DividerMiddle bg="#fffff6" />
    <Content height="auto">
      <Inner>{children}</Inner>
    </Content>
  </>
)

export default Projects

Projects.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
