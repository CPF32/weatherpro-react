import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { createCity } from '../../api/city'

class CreateCity extends Component {
  constructor (props) {
    super(props)

    this.state = {
      form: {
        name: '',
        favorite: false
      }
    }
  }

  handleInputChange = event => {
    event.persist()
    const updatedField = { [event.target.name]: event.target.value }

    const newCity = Object.assign(this.state.form, updatedField)

    this.setState({ city: newCity })
  }

  onCreateCity = (event) => {
    event.preventDefault()

    const { msgAlert, history, user } = this.props

    // Pass user and data to createUpload
    createCity(this.state.form, user)
      .then(() => this.setState({ form: { name: '' } }))
      .then((response) => {
        return msgAlert({
          heading: 'Successfully Added: ' + this.state.form.name,
          variant: 'success'
        })
      })

      .then(() => history.push('/city-builder'))
      .catch(error => {
        this.setState({ name: '', favorite: false })
        msgAlert({
          heading: 'Create Failed with error: ' + error.message,
          message: 'Create failed',
          variant: 'danger'
        })
      })
  }

  render () {
    return (
      <form className="searchBox" onSubmit={this.onCreateCity}>
        <input
          autoComplete="off"
          className="searchInput"
          type="text"
          name="name"
          placeholder="Search for a city"
          value={this.state.form.name}
          onChange={this.handleInputChange}
        />
        <button className="searchButton" type="submit">
          <i className="material-icons"></i>
        </button>
      </form>
    )
  }
}

export default withRouter(CreateCity)
