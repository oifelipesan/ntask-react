import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Input from '../../components/Input'
import { Container, Form, Button, Text, MessageError } from '../../styles'

import api from '../../services/api'
import { login } from '../../services/auth'

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      error: ''
    }

    this.setValueEmail = this.setValueEmail.bind(this)
    this.setValuePassword = this.setValuePassword.bind(this)
    this.handleSignIn = this.handleSignIn.bind(this)
  }

  setValueEmail(value) {
    this.setState({ email: value })
  }

  setValuePassword(value) {
    this.setState({ password: value })
  }

  async handleSignIn(event) {
    event.preventDefault()

    const { email, password } = this.state

    if (!email || !password) {
      this.setState({ error: 'Todos os campos são obrigatórios' })
    } else {
      try {
        const response = await api.post('/auth', { email, password })
        login(response.data.token)
        this.props.history.push('/app')
      } catch (err) {
        this.setState({
          error: 'Houve um problema com o login'
        })
      }
    }
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignIn}>
          <h1>Login</h1>

          {this.state.error && <MessageError>{this.state.error}</MessageError>}

          <Input
            type="email"
            placeholder="Email"
            setEmail={this.setValueEmail}
          />
          <Input
            type="password"
            placeholder="Password"
            setPassword={this.setValuePassword}
          />

          <Button type="submit">Enter</Button>

          <Text>
            <p>
              Don't have account? <Link to="/register">Sign up</Link>
            </p>
          </Text>
        </Form>
      </Container>
    )
  }
}

export default withRouter(SignIn)
