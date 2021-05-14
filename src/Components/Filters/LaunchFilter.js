import React, { useCallback, useState } from 'react'
import { useLaunchContext } from '../../Contexts/LaunchContext'

const LaunchFilter = ({ label, active, setActiveFilter }) => {
  const { setUrl } = useLaunchContext()
  const [toggle, setToggle] = useState(false)

  const successFulLaunchHandler = useCallback(() => {
    !toggle
      ? localStorage.setItem('launch_success', JSON.stringify(label))
      : localStorage.removeItem('launch_success')
    const yearFilter = localStorage.getItem('yearFilter')
    const launch_success = localStorage.getItem('launch_success')
    const land_success = localStorage.getItem('land_success')
    const url = launch_success
      ? `launches?launch_success=${launch_success}`
      : 'launches?limit=100'

    if (yearFilter && land_success) {
      setUrl(`${url}&land_success=${land_success}&launch_year=${yearFilter}`)
      return
    }
    if (yearFilter) {
      setUrl(`${url}&launch_year=${yearFilter}`)
      return
    }
    if (land_success) {
      setUrl(`${url}&land_success=${land_success}`)
      return
    }
    setUrl(url)
  }, [label, setUrl, toggle])
  return (
    <button
      className={`filter-button ${toggle && active}`}
      onClick={() => {
        setActiveFilter()
        setToggle((prev) => !prev)
        successFulLaunchHandler()
      }}
    >
      {label === true ? 'true' : 'false'}
    </button>
  )
}

export default LaunchFilter
