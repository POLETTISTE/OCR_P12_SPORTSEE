import { useState, useEffect } from 'react'
import axios from 'axios'

function useFetch(url, mock) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  const DATA_FROM_API = true

  useEffect(() => {
    if (DATA_FROM_API) {
      fetchData()
    } else {
      setData(mock)
    }
  }, [])

  async function fetchData() {
    try {
      const response = await axios.get(url)
      setData(response.data.data)
    } catch (error) {
      console.log('erreur dans API / serveur arrete')

      setError(true)
    }
  }
  return { data, error }
}

export default useFetch
