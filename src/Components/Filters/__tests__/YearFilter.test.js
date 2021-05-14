import React from 'react'
import ReactDOM from 'react-dom'
import YearFilter from '../YearFilter'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import { LaunchContextProvider } from '../../../Contexts/LaunchContext'
import { getYearlyFilters } from '../../../Utils/getYearFilters'

afterEach(cleanup)
it('should render button', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LaunchContextProvider>
      <YearFilter active={true} label={2016} setActiveFilter={() => {}} />
    </LaunchContextProvider>,
    div
  )
  const button = getYearlyFilters().map(({ label }, index) => (
    <LaunchContextProvider key={index}>
      <YearFilter active={true} label={label} setActiveFilter={() => {}} />
    </LaunchContextProvider>
  ))
  const { getAllByTestId } = render(button)
  getAllByTestId('yearFilter').map((data) =>
    expect(data).toHaveClass('filter-button true')
  )
})

it('should match button snapshot', () => {
  const button = getYearlyFilters().map(({ label }, index) => (
    <LaunchContextProvider key={index}>
      <YearFilter active={''} label={label} setActiveFilter={() => {}} />
    </LaunchContextProvider>
  ))
  const tree = renderer.create(button)
  expect(tree).toMatchSnapshot()
})
