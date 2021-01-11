import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { deleteCity } from '../../api/city'

const DeleteCity = () => {
  const { msgAlert, history, match, user } = this.props

  deleteCity(user, match.params.id)
    .then(() => {
      msgAlert({
        heading: 'City Deleted',
        message: '',
        varient: 'success'
      })
    })
    .then(() => history.push('/city-builder'))
    .catch(error => {
      msgAlert({
        heading: 'Deletion Failed with error: ' + error.message,
        message: 'Delete failure, try again',
        varient: 'danger'
      })
    })
}

export default withRouter(DeleteCity)
