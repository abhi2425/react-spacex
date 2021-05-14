import React, { useCallback, useState } from 'react'
import { useLaunchContext } from '../../Contexts/LaunchContext'

const LandingFilter = ({ label, active, setActiveFilter }) => {
  const { setUrl } = useLaunchContext()
  const [toggle, setToggle] = useState(false)

  const successFulLandHandler = useCallback(() => {
    !toggle
      ? localStorage.setItem('land_success', JSON.stringify(label))
      : localStorage.removeItem('land_success')
    const yearFilter = localStorage.getItem('yearFilter')
    const launch_success = localStorage.getItem('launch_success')
    const land_success = localStorage.getItem('land_success')

    const url = land_success
      ? `launches?land_success=${land_success}`
      : 'launches?limit=100'
    if (yearFilter && launch_success) {
      setUrl(
        `${url}&launch_success=${launch_success}&launch_year=${yearFilter}`
      )
      return
    }
    if (yearFilter) {
      setUrl(`${url}&launch_year=${yearFilter}`)
      return
    }
    if (launch_success) {
      setUrl(`${url}&launch_success=${launch_success}`)
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
        successFulLandHandler()
      }}
    >
      {label === true ? 'true' : 'false'}
    </button>
  )
}

export default LandingFilter
