import React, { memo, useCallback } from 'react'
import { useLaunchContext } from '../../Contexts/LaunchContext'

const YearFilter = ({ label, active, setActiveFilter }) => {
  const { setUrl } = useLaunchContext()

  const yearlyFilterHandler = useCallback(() => {
    localStorage.setItem('yearFilter', JSON.stringify(label))

    const yearFilter = localStorage.getItem('yearFilter')
    const launch_success = localStorage.getItem('launch_success')
    const land_success = localStorage.getItem('land_success')
    const url = yearFilter
      ? `launches?launch_year=${yearFilter}`
      : 'launches?limit=100'

    if (launch_success && land_success) {
      setUrl(
        `${url}&launch_success=${launch_success}&land_success=${land_success}`
      )
      return
    }
    if (launch_success) {
      setUrl(`${url}&launch_success=${launch_success}`)
      return
    }
    if (land_success) {
      setUrl(
        `${url}&launch_success=${launch_success}&launch_year=${yearFilter}`
      )
      return
    }

    setUrl(url)
  }, [label, setUrl])

  return (
    <button
      className={`filter-button ${active}`}
      onClick={() => {
        setActiveFilter()
        yearlyFilterHandler()
      }}
    >
      {label}
    </button>
  )
}

export default memo(YearFilter)
