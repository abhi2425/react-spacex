import React from 'react'
import ReactDOM from 'react-dom'
import Card from '../src/Components/Card/Card'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

it('should render card contents', () => {
  const div = document.createElement('div')

  ReactDOM.render(<Card />, div)
  const { getByTestId } = render(
    <Card
      imageUrl={'test-string'}
      missionId={[1, 2, 3]}
      launchYear={2007}
      launch={true}
      landing={false}
      flightNumber={'7519323'}
      missionName={'Falcon-1'}
    />
  )
  expect(getByTestId('card')).toHaveClass('space-card')
})
