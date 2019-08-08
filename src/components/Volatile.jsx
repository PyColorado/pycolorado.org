import React, { Component } from 'react'

const makeVolatile = WrappedComponent => {
  return class Volatile extends Component {
    state = {
      component: null,
    }

    componentDidMount() {
      this.setState(this.props)
    }

    render() {
      return <WrappedComponent {...this.state} />
    }
  }
}

export { makeVolatile }
