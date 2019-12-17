import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from '../../styles'
import { Main } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const NotFound = () => {
  return (
    <Container>
      <Main>
        <h1>Page Not Found</h1>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} /> Go to home
        </Link>
      </Main>
    </Container>
  )
}

export default NotFound
