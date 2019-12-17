import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { logout } from '../../services/auth'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEllipsisV,
  faUser,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons'

import { Container, Icon, Menu, MenuItem } from './styles'

class MenuDrop extends Component {
  constructor() {
    super()

    this.state = { showMenu: false }

    this.showMenu = this.showMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  showMenu(event) {
    event.preventDefault()

    this.setState({ showMenu: !this.state.showMenu }, () => {
      document.addEventListener('click', this.closeMenu)
    })
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu)
    })
  }

  handleLogout = event => {
    event.preventDefault()

    logout()
    this.props.history.push('/')
  }

  render() {
    return (
      <Container>
        <Icon onClick={this.showMenu}>
          <FontAwesomeIcon icon={faEllipsisV} />
        </Icon>

        <Menu state={this.state.showMenu}>
          <MenuItem>
            <Link to="/account">
              <FontAwesomeIcon icon={faUser} /> Account
            </Link>
          </MenuItem>
          <MenuItem>
            <span onClick={this.handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </span>
          </MenuItem>
        </Menu>
      </Container>
    )
  }
}

export default withRouter(MenuDrop)
