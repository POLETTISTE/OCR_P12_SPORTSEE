const axios = require('axios').default

export function fetchUserMainData() {
  return (
    // Make a request for a user with a given ID
    axios
      .get('http://localhost:3000/user/12')
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

// fetchUserMainData()
