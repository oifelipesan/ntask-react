import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import { TaskItem, Check, Trash } from './style'

export class Task extends Component {
  render() {
    const { id, title, done } = this.props.task

    return (
      <TaskItem>
        <Check onClick={this.props.markDone.bind(this, id, done)}>
          {done ? (
            <FontAwesomeIcon icon={faCheckCircle} />
          ) : (
            <FontAwesomeIcon icon={faCircle} />
          )}
        </Check>
        <span>{title}</span>
        <Trash onClick={this.props.removeTask.bind(this, id, title)}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </Trash>
      </TaskItem>
    )
  }
}

export default Task
