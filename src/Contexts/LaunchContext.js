import { axios } from '../Utils/url'
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import window from 'global/window'

const LaunchContext = createContext()

export const LaunchContextProvider = ({ children }) => {
  const [allSpaceShips, setAllSpaceShips] = useState([])
  const [loading, setLoading] = useState(true)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [url, setUrl] = useState('')

  const getAllSpaceShips = useCallback(async (url = 'launches?limit=100') => {
    try {
      setLoading(true)
      const { data } = await axios.get(url)
      if (data) {
        setLoading(false)
        setAllSpaceShips(data)
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }, [])

  useEffect(() => {
    if (url) {
      getAllSpaceShips(url)
      window.history.replaceState(null, 'SpaceX Launch Program', url)
    }
  }, [url, getAllSpaceShips])

  const values = useMemo(
    () => ({
      getAllSpaceShips,
      setScreenWidth,
      setUrl,
      allSpaceShips,
      loading,
      screenWidth,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [allSpaceShips, loading, screenWidth]
  )

  return (
    <LaunchContext.Provider value={values}>{children}</LaunchContext.Provider>
  )
}

export const useLaunchContext = () => useContext(LaunchContext)
