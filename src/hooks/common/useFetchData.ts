/*
useFetchData is a custom hook that simplifies the process of fetching data and managing
loading state. Pass in a URL, and it will return an object containing the fetched data and
a loading boolean. This hook promotes code reusability and keeps your components clean
*/
import { useState, useEffect } from 'react'

const useFetchData = (url: string) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        setData(responseJson)
        setLoading(false)
      })
  }, [url])

  return { data, loading }
}

export default useFetchData
