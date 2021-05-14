import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import Home from './Pages/Home'
import { LaunchContextProvider } from './Contexts/LaunchContext'
const App = () => {
  return (
    <LaunchContextProvider>
      <Router history={createMemoryHistory()}>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </LaunchContextProvider>
  )
}

export default App
