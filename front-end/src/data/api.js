const axios = require('axios').default

export function fetchUserMainData() {
  return (
    // Make a request for a user with a given ID
    axios
      .get('http://localhost:3000/user/${userId}')
      .then(function (response) {
        // handle success
        console.log(response)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .finally(function () {
        // always executed
      })
  )
}

export function fetchUserMainSessions() {
  return (
    // Make a request for a user with a given ID
    axios
      .get('http://localhost:3000/user/${userId}/average-sessions')
      .then(function (response) {
        // handle success
        console.log(response)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .finally(function () {
        // always executed
      })
  )
}

export function fetchUserMainActivity() {
  return (
    // Make a request for a user with a given ID
    axios
      .get('http://localhost:3000/user/${userId}/activity')
      .then(function (response) {
        // handle success
        console.log(response)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .finally(function () {
        // always executed
      })
  )
}

export function fetchUserMainPerformance() {
  return (
    // Make a request for a user with a given ID
    axios
      .get('http://localhost:3000/user/${userId}/performance')
      .then(function (response) {
        // handle success
        console.log(response)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .finally(function () {
        // always executed
      })
  )
}
