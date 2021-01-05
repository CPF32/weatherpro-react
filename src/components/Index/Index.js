import React, { Component, Fragment } from 'react'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Dropdown from 'react-bootstrap/Dropdown'
import { withRouter } from 'react-router-dom'
import { indexCity } from '../../api/city'

class IndexCity extends Component {
  constructor () {
    super()
    this.state = {
      cities: null
    }
  }

  // handleInputChange = event => this.setState({
  //   [event.target.name]: event.target.value
  // })

  componentDidMount () {
    const { user, msgAlert } = this.props

    indexCity(user)
      .then(res => {
        this.setState({ cities: res.data.cities })
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
    if (!this.state.cities) {
      return ('')
    } else if (this.state.cities.length === 0) {
      return ('')
    } else {
      return (
        <CardColumns className="custom-scrollbar cards">
          {this.state.cities.map(city => (
            <Fragment key={city._id}>
              <Card>
                <Card.Body>
                  <Card.Title>{city.name}</Card.Title>
                  <Card.Text>
                    Temperature: <br/>
                    Description:
                  </Card.Text>
                  <Dropdown className="dropdown">
                    <Dropdown.Toggle variant="btn btn-light" id="dropdown-basic">
                      Options
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="">Favorite</Dropdown.Item>
                      <Dropdown.Item href="">Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Card.Body>
              </Card>
            </Fragment>
          ))}
        </CardColumns>
      )
    }
  }
}

export default withRouter(IndexCity)
