import { useState, useEffect } from 'react'
import axios from 'axios'

function useFetch(url, mock) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  const DATA_FROM_API = false

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
      setError(true)

      console.log('erreur API / vérifier que votre serveur est bien lancé')
    }
  }
  return { data, error }
}

export default useFetch
