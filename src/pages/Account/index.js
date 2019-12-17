import React, { Component } from 'react'
import Header from '../../components/Header'
import api from '../../services/api'

import { Container, Main, Content, Text, Button } from './styles'

export default class Account extends Component {
  constructor() {
    super()

    this.state = { name: '', email: '' }

    this.RemoveAccount = this.RemoveAccount.bind(this)
  }

  async componentDidMount() {
    const user = await api.get('/users')
    this.setState({
      name: user.data.name,
      email: user.data.email
    })
  }

  async RemoveAccount(event) {
    event.preventDefault()

    // eslint-disable-next-line no-restricted-globals
    if (confirm(`Deseja excluir sua conta "${this.state.name}"`)) {
      await api.delete('/users')
      // eslint-disable-next-line no-restricted-globals
      if (confirm('Conta excluida com sucesso!')) {
        this.props.history.push('/')
      }
    }
  }

  render() {
    return (
      <Container>
        <Header />
        <Main>
          <Content>
            <Text>
              Name: <span>{this.state.name}</span>
            </Text>
            <Text>
              Email: <span>{this.state.email}</span>
            </Text>

            <Button onClick={this.RemoveAccount}>Excluir Conta</Button>
          </Content>
        </Main>
      </Container>
    )
  }
}
