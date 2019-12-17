import React, { Component } from 'react'
import Header from '../../components/Header'
import api from '../../services/api'

import Input from '../../components/Input'
import { Button, MessageError } from '../../styles'

import { Container, Main, Form } from './styles'

export default class AddTask extends Component {
  constructor(props) {
    super(props)
    this.state = { task: '', error: '' }

    this.setValueTask = this.setValueTask.bind(this)
    this.handleAddTask = this.handleAddTask.bind(this)
  }

  setValueTask(value) {
    this.setState({ task: value })
  }

  async handleAddTask(event) {
    event.preventDefault()

    const { task } = this.state

    if (!task) {
      this.setState({ error: 'Title is required.' })
    } else {
      try {
        await api.post('/tasks/register', { title: task })
        this.props.history.push('/app')
      } catch (err) {
        this.setState({
          error: 'Houve um problema para adicionar a Tarefa'
        })
      }
    }
  }

  render() {
    return (
      <Container>
        <Header />
        <Main>
          <Form onSubmit={this.handleAddTask}>
            {this.state.error && (
              <MessageError>{this.state.error}</MessageError>
            )}
            <Input
              type="text"
              placeholder="Title"
              setTask={this.setValueTask}
            />
            <Button>Add Task</Button>
          </Form>
        </Main>
      </Container>
    )
  }
}
