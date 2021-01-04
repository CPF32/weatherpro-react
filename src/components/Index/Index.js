import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { indexCity } from '../../api/city'

class IndexCity extends Component {
  constructor () {
    super()
    this.state = {
      citys: null
    }
  }

  // handleInputChange = event => this.setState({
  //   [event.target.name]: event.target.value
  // })

  componentDidMount () {
    const { user, msgAlert } = this.props

    indexCity(user)
      .then(res => {
        this.setState({ citys: res.data.citys })
      })
      .catch(err => {
        msgAlert({
          heading: 'City Index Failed',
          message: `Failed with error: ${err.message}`,
          variant: 'danger'
        })
      })
  }

  render () {
    return (
      <div className="city-carousel">
        <h2>CAROUSEL</h2>
        <p></p>
      </div>
    )
  }
}

export default withRouter(IndexCity)
