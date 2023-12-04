/*
useInterval is a custom hook that allows you to run a function at a specified interval.
This can be useful for polling data, animating UI elements, or implementing a countdown timer.
*/

import { useEffect, useRef } from 'react'

const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef(callback)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (delay !== null) {
      const id = setInterval(() => savedCallback.current(), delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export default useInterval
