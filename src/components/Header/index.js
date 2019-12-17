import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faTasks } from '@fortawesome/free-solid-svg-icons'

import MenuDrop from '../MenuDrop'

import { HeaderApp, Back } from './styles'

const Header = props => {
  return (
    <HeaderApp>
      <Back back={props.back}>
        <Link to="/app">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </Back>
      <h1>
        <FontAwesomeIcon icon={faTasks} /> Ntask
      </h1>
      <MenuDrop />
    </HeaderApp>
  )
}

export default Header
