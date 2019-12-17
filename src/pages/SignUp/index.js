import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import api from '../../services/api'
import { login } from '../../services/auth'

import Input from '../../components/Input'
import { Container, Form, Button, Text, MessageError } from '../../styles'

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      error: ''
    }

    this.setValueName = this.setValueName.bind(this)
    this.setValueEmail = this.setValueEmail.bind(this)
    this.setValuePassword = this.setValuePassword.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  setValueName(value) {
    this.setState({ name: value })
  }

  setValueEmail(value) {
    this.setState({ email: value })
  }

  setValuePassword(value) {
    this.setState({ password: value })
  }

  async handleSignUp(event) {
    event.preventDefault()

    const { name, email, password } = this.state

    if (!name || !email || !password) {
      this.setState({ error: 'Todos os campos são obrigatórios' })
    } else {
      try {
        const response = await api.post('/users/register', {
          name,
          email,
          password
        })
        login(response.data.token)
        this.props.history.push('/app')
      } catch (err) {
        this.setState({ error: 'Ocorreu um erro ao registrar sua conta' })
      }
    }
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
          <h1>Register</h1>

          {this.state.error && <MessageError>{this.state.error}</MessageError>}

          <Input type="text" placeholder="Name" setName={this.setValueName} />
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

          <Button type="submit">Sign Up</Button>

          <Text>
            <p>
              Already have an account? <Link to="/">Login</Link>
            </p>
          </Text>
        </Form>
      </Container>
    )
  }
}

export default withRouter(SignUp)
