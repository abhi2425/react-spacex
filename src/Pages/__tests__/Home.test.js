import React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import { LaunchContextProvider } from '../../Contexts/LaunchContext'
import Home from '../Home'

afterEach(cleanup)
it('should load home page', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LaunchContextProvider>
      <Home />
    </LaunchContextProvider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)

  const { getByTestId } = render(
    <LaunchContextProvider>
      <Home />
    </LaunchContextProvider>
  )
  expect(getByTestId('Home')).toHaveClass('App')
})
it('should match home snapshot', () => {
  const tree = renderer.create(
    <LaunchContextProvider>
      <Home />
    </LaunchContextProvider>
  )
  expect(tree).toMatchSnapshot()
})
