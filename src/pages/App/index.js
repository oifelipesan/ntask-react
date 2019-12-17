import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import api from '../../services/api'

import Header from '../../components/Header'
import Tasks from '../../components/Tasks'

import { Container, ButtonAdd } from './styles'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { tasks: [] }

    this.Done = this.Done.bind(this)
    this.RemoveTask = this.RemoveTask.bind(this)
  }

  async componentDidMount() {
    const tasks = await api.get('/tasks')
    this.setState({ tasks: tasks.data })
  }

  async Done(id, done) {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          task.done = !done
        }
        return task
      })
    })

    api.put(`/tasks/${id}`, { done: !done })
  }

  async RemoveTask(id, title) {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(`Deseja excluir "${title}"`)) {
      await api.delete(`/tasks/${id}`)

      const tasks = await api.get('/tasks')
      this.setState({ tasks: tasks.data })
    }
  }

  render() {
    return (
      <Container>
        <Header back="false" />
        <Tasks
          tasks={this.state.tasks}
          markDone={this.Done}
          removeTask={this.RemoveTask}
        />
        {this.state.tasks.length === 0 ? (
          ''
        ) : (
          <Link to="/add-task">
            <ButtonAdd>
              <FontAwesomeIcon icon={faPlus} />
            </ButtonAdd>
          </Link>
        )}
      </Container>
    )
  }
}
