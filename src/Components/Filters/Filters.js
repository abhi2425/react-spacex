import React, { memo, useMemo, useState } from 'react'
import { useLaunchContext } from '../../Contexts/LaunchContext'
import { getYearlyFilters } from '../../Utils/getYearFilters'
import LandingFilter from './LandingFilter'
import LaunchFilter from './LaunchFilter'
import YearFilter from './YearFilter'

const Filters = () => {
  const [yearFilterLabel, setYearFilterLabel] = useState(0)
  const [launchLabel, setLaunchLabel] = useState(null)
  const [landingLabel, setLandingLabel] = useState(null)

  const { screenWidth } = useLaunchContext()
  const yearlyFilters = useMemo(
    () =>
      getYearlyFilters().map(({ label }, index) => {
        let active = ''
        if (yearFilterLabel === label) active = 'active-filter'
        return (
          <YearFilter
            key={`${index} ${label}`}
            setActiveFilter={() => setYearFilterLabel(label)}
            label={label}
            active={active}
          />
        )
      }),
    [yearFilterLabel]
  )

  const launchFilters = useMemo(
    () =>
      [true, false].map((label, index) => {
        let active = ''
        if (launchLabel === label) active = 'active-filter'
        return (
          <LaunchFilter
            key={`${index} ${label}`}
            label={label}
            active={active}
            setActiveFilter={() => setLaunchLabel(label)}
          />
        )
      }),

    [launchLabel]
  )
  const landingFilters = useMemo(
    () =>
      [true, false].map((label, index) => {
        let active = ''
        if (landingLabel === label) active = 'active-filter'
        return (
          <LandingFilter
            key={`${index} ${label}`}
            label={label}
            active={active}
            setActiveFilter={() => setLandingLabel(label)}
          />
        )
      }),
    [landingLabel]
  )

  return (
    <section
      data-testid={'filter'}
      className='filters'
      style={{
        zIndex: '1',
        position: screenWidth <= 700 ? 'relative' : 'fixed',
        marginLeft: screenWidth <= 700 ? '0' : '1.5rem',
      }}
    >
      <h4>Filters</h4>
      <p>Launch Year </p>
      <div className='filter-container'>{yearlyFilters}</div>
      <p>Successful Launch </p>
      <div className='filter-container'>{launchFilters}</div>
      <p>Successful Landing </p>
      <div className='filter-container'>{landingFilters}</div>
    </section>
  )
}

export default memo(Filters)
