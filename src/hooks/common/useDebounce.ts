/*
useDebounce is a hook that debounces a given value with a specified delay.
This can be particularly useful for input
fields where you want to delay an API call or other action until the user stops typing.
*/
import { useState, useEffect } from 'react'

const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
