import React from 'react'
import PropTypes from 'prop-types'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'

const Contact = ({ children }) => (
  <>
    <Divider fill="#23262b" height="auto">
      <Content height="auto">{children}</Content>
    </Divider>
  </>
)

export default Contact

Contact.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
