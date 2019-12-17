import React, { Component } from 'react'
import { Container, Span } from './styles'

class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasFocus: false,
      value: ''
    }

    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.getValue = this.getValue.bind(this)
  }

  getValue(event) {
    this.setState({ value: event.target.value })

    if (this.props.placeholder === 'Name') {
      this.props.setName(event.target.value)
    }

    if (this.props.placeholder === 'Email') {
      this.props.setEmail(event.target.value)
    }

    if (this.props.placeholder === 'Password') {
      this.props.setPassword(event.target.value)
    }

    if (this.props.placeholder === 'Title') {
      this.props.setTask(event.target.value)
    }
  }

  onFocus(event) {
    this.setState({ hasFocus: true })
  }

  onBlur(event) {
    if (!this.state.value) this.setState({ hasFocus: false })
  }

  render() {
    return (
      <Container>
        <input
          type={this.props.type}
          value={this.state.value}
          onChange={this.getValue}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        <Span
          data-placeholder={this.props.placeholder}
          hasFocus={this.state.hasFocus}
        ></Span>
      </Container>
    )
  }
}

export default Input
