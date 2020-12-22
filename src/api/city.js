import apiUrl from '../apiConfig'
import axios from 'axios'

// CREATE
export const createCity = (city, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/city-builder',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: {
      city: {
        name: city.name,
        favorite: city.favorite
      }
    }
  })
}

// UPDATE
export const updateCity = (city, user, id) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/city-builder/' + id,
    headers: {
      Authorization: `Token ${user.token}`
    },
    data: city
  })
}

// DELETE
export const deleteCity = (user, id) => {
  return axios({
    url: apiUrl + '/city-builder/' + id,
    method: 'DELETE',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}

// INDEX
export const indexCity = user => {
  return axios({
    method: 'GET',
    url: apiUrl + '/city-builder',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}
