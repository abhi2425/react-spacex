import React, { useEffect, useMemo } from 'react'
import './Home.css'
import Card from '../Components/Card/Card'
import { useLaunchContext } from '../Contexts/LaunchContext'
import Loading from '../Components/Loading/Loading'
import Filters from '../Components/Filters/Filters'
import window from 'global/window'
const Home = () => {
  const {
    getAllSpaceShips,
    allSpaceShips,
    loading,
    screenWidth,
    setScreenWidth,
  } = useLaunchContext()

  useEffect(() => {
    const keys = Object.keys(localStorage)
    if (keys.length) {
      for (const key of keys) localStorage.removeItem(key)
      window.history.replaceState(null, 'SpaceX Launch Program', '/')
    }
  }, [])

  useEffect(() => {
    if (window) {
      window.addEventListener('resize', () => setScreenWidth(window.innerWidth))
      getAllSpaceShips()
      return () => window.removeEventListener('resize', () => {})
    }
  }, [getAllSpaceShips, setScreenWidth])

  const spaceShips = useMemo(
    () =>
      allSpaceShips.map((spaceShip, s_index) => (
        <Card
          key={`${s_index}_${spaceShip.mission_name}`}
          imageUrl={spaceShip.links?.mission_patch}
          launchYear={spaceShip.launch_year}
          missionId={spaceShip.mission_id}
          launch={spaceShip.launch_success}
          flightNumber={spaceShip.flight_number}
          missionName={spaceShip.mission_name}
          landing={spaceShip.rocket?.first_stage?.cores[0]?.land_success}
        />
      )),
    [allSpaceShips]
  )
  const getStyles = () => {
    let styles = 'space'
    if (screenWidth >= 700 && screenWidth <= 1024) styles = 'space display-tab'
    if (screenWidth >= 1024) styles = 'space display-laptop'
    return styles
  }

  return (
    <div className='App'>
      <h1 className='heading'>SpaceX Launch Programs</h1>
      <main>
        <Filters />
        <section
          className={getStyles()}
          style={{ marginLeft: screenWidth <= 700 ? '0' : '23.5rem' }}
        >
          {loading ? (
            <Loading />
          ) : spaceShips.length === 0 ? (
            <h1 style={{ marginTop: '1rem' }}>
              No Results found For Your Filter!
            </h1>
          ) : (
            spaceShips
          )}
        </section>
      </main>
    </div>
  )
}

export default Home
