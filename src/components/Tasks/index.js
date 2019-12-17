import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Task from '../Task'
import { Container, NoTasks, TextNoTask } from './styles'

class Tasks extends Component {
  render() {
    return (
      <Container>
        {this.props.tasks.length === 0 ? (
          <NoTasks>
            <TextNoTask>
              <span>Nenhuma tarefa cadastrada.</span>
              <span> Vamos adicionar uma?</span>
            </TextNoTask>
            <Link to="/add-task">Adicionar tarefa</Link>
          </NoTasks>
        ) : (
          this.props.tasks.map(task => (
            <Task
              key={task.id}
              task={task}
              markDone={this.props.markDone}
              removeTask={this.props.removeTask}
            />
          ))
        )}
      </Container>
    )
  }
}

export default Tasks
