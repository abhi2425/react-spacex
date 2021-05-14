import React from 'react'
import ReactDOM from 'react-dom'
import Filter from '../Filters'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import { LaunchContextProvider } from '../../../Contexts/LaunchContext'
afterEach(cleanup)
it('should render Filter Component', () => {
  const div = document.createElement('div')

  ReactDOM.render(
    <LaunchContextProvider>
      <Filter />
    </LaunchContextProvider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)

  const { getByTestId } = render(
    <LaunchContextProvider>
      <Filter />
    </LaunchContextProvider>
  )
  expect(getByTestId('filter')).toHaveClass('filters')
})

it('should match snapshot', () => {
  const tree = renderer.create(
    <LaunchContextProvider>
      <Filter />
    </LaunchContextProvider>
  )
  expect(tree).toMatchSnapshot()
})
