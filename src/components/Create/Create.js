import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import { createCity } from '../../api/city'
import Button from 'react-bootstrap/Button'

class CreateCity extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      favorite: false
    }
  }

  handleInputChange = event => {
    event.persist()
    const updatedField = { [event.target.name]: event.target.value }

    const newCity = Object.assign(this.state.city, updatedField)

    this.setState({ city: newCity })
  }

  onCreateCity = (event) => {
    event.preventDefault()
    // Create and empty formdata object
    const data = new FormData()
    // taking the data from the component state
    // and append it to the data formdata object
    data.append('name', this.state.form.name)
    data.append('favorite', this.state.form.favorite)
    // getting user from the props
    const { msgAlert, history, user } = this.props

    // Pass user and data to createUpload
    createCity(data, user)
      .then((response) => {
        return msgAlert({
          heading: 'Successfully Posted',
          message: 'Uploaded File:' + ' ' + response.data.upload.name,
          variant: 'success'
        })
      })
      // "history" = where the user has been
      // history.push = Go to 'here'
      // .then(() => history.push('/'))
      .then(() => history.push('/'))
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
      <div className="row">
        <h1>WeatherPro LOGO HERE</h1>
        <div className="city-search">
          <Form onSubmit={this.onCreateUpload}>
            <input className="form-control"
              placeholder="File Name"
              value={this.state.form.name}
              name="name"
              onChange={this.handleInputChange}
            />
            <input className="form-control"
              placeholder="File Tag"
              value={this.state.form.tag}
              name="tag"
              onChange={this.handleInputChange}
            />
            <br/>
            <Form.File id="upload-file-input" name="upload" onChange={this.handleInputChange}/>
            <br/>
            <Button type="submit">Submit</Button>
          </Form>
        </div>
        <div className="city-area">

        </div>
      </div>
    )
  }
}

export default withRouter(CreateCity)
